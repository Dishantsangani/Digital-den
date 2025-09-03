import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  Toastifyerror,
  Toastitysuccess,
} from "../../../Component/Notification/Toastitynotificaition";
import {
  addProductApi,
  deleteProductDataApi,
  getProductDataApi,
} from "../../../API/Admin/adminApi";

function AdminProducts() {
  const [model, setmodel] = useState(false);
  const [getdata, setgetdata] = useState([]);
  const [errors, setErrors] = useState({});
  const [formdata, setformdata] = useState({
    productname: "",
    category: "",
    price: "",
    stockquantity: "",
    taxrate: "",
    productImage: "",
    description: "",
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  // Search
  const [searchinput, setSearchinput] = useState("");
  const [sortOption, setSortOption] = useState("az");

  // Search
  let filterdata = getdata.filter((item) =>
    [item.productname, item.category, item.description].some((field) =>
      field?.toLowerCase().includes(searchinput.toLowerCase())
    )
  );
  if (sortOption === "az") {
    filterdata = filterdata.sort((a, b) =>
      a.productname.localeCompare(b.productname)
    );
  } else if (sortOption === "za") {
    filterdata = filterdata.sort((a, b) =>
      b.productname.localeCompare(a.productname)
    );
  } else if (sortOption === "newest") {
    filterdata = filterdata.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (sortOption === "oldest") {
    filterdata = filterdata.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterdata.slice(indexOfFirstItem, indexOfLastItem);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          productImage: "Only image files are allowed",
        }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          productImage: "Image size must be less than 5MB",
        }));
        return;
      }
    }

    setformdata((prev) => ({
      ...prev,
      productImage: file,
    }));

    setErrors((prev) => ({
      ...prev,
      productImage: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Product Name
    if (!formdata.productname.trim()) {
      newErrors.productname = "Please Enter ProductName";
    } else if (formdata.productname.length < 5) {
      newErrors.productname = " ProductName Minmum 5 character ";
    }
    // description
    if (!formdata.description.trim()) {
      newErrors.description = "Please Enter Product description";
    } else if (formdata.description.length < 5) {
      newErrors.description = " Product description Minmum 5 character ";
    }
    // price
    if (
      formdata.price === "" ||
      isNaN(formdata.price) ||
      parseFloat(formdata.price) <= 0
    ) {
      newErrors.price = "Purchase price must be greater than 0";
    }

    // StockQuantity
    if (
      formdata.stockquantity === "" ||
      isNaN(formdata.stockquantity) ||
      parseFloat(formdata.stockquantity) <= 0
    ) {
      newErrors.stockquantity = "stockquantity  must be greater than 0";
    }
    // TaxRate
    if (
      formdata.taxrate === "" ||
      isNaN(formdata.taxrate) ||
      parseFloat(formdata.taxrate) <= 0
    ) {
      newErrors.taxrate = "taxrate must be greater than 0";
    }
    // Category
    if (!formdata.category) {
      newErrors.category = "Please select a category";
    }

    // Image Validation
    if (!formdata.productImage) {
      newErrors.productImage = "Please upload a product image";
    } else if (!formdata.productImage.type.startsWith("image/")) {
      newErrors.productImage = "Only image files are allowed";
    } else if (formdata.productImage.size > 5 * 1024 * 1024) {
      newErrors.productImage = "Image size must be less than 5MB";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitdata = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const fd = new FormData();
    fd.append("productname", formdata.productname);
    fd.append("category", formdata.category);
    fd.append("price", formdata.price);
    fd.append("stockquantity", formdata.stockquantity);
    fd.append("taxrate", formdata.taxrate);
    fd.append("description", formdata.description);
    fd.append("productImage", formdata.productImage);

    try {
      const res = await addProductApi(fd);
      console.log("res: ", res);
      Toastitysuccess("Product Added Successfully !");
      setformdata({
        productname: "",
        category: "",
        price: "",
        stockquantity: "",
        taxrate: "",
        description: "",
        productImage: "",
      });
      setErrors({});
    } catch (error) {
      Toastifyerror(error);
    }
  };

  const handledelete = async (id) => {
    try {
      await deleteProductDataApi(id);
      Toastitysuccess("Product Deleted !");
      featchproduct();
    } catch (error) {
      Toastifyerror(error);
    }
  };

  const featchproduct = async () => {
    try {
      const res = await getProductDataApi();
      setgetdata(res.data);
    } catch (error) {
      Toastifyerror(error);
    }
  };

  useEffect(() => {
    featchproduct();
  }, []);

  return (
    <>
      <div className="layout-content-container flex flex-col max-w-full">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl text-slate-900 font-bold">Product !</h1>
            <button
              type="button"
              onClick={() => setmodel(!model)}
              className="px-5 py-3 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-indigo-600 hover:bg-indigo-500 cursor-pointer"
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-9xl flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-indigo-600 flex border-none bg-slate-200 items-center justify-center pl-4 rounded-l-xl border-r-0"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Search products"
                value={searchinput}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-indigo-600 focus:outline-0 focus:ring-0 border-none bg-slate-200 focus:border-none h-full placeholder:text-[#47569e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                onChange={(e) => setSearchinput(e.target.value)}
              />
              <div className="flex items-center justify-center p-4">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2.5"
                >
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>
          </label>
        </div>
        <div className="px-4 py-3 @container">
          <ToastContainer />
          <div className="flex overflow-hidden rounded-xl border border-[#ced2e9] bg-[#f8f9fc]">
            <table className="flex-1">
              <thead>
                <tr className="bg-[#f8f9fc]">
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Img
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-240 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Product
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Price
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Category
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-360 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Stock Quantity
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Discount %
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Description
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(currentItems) &&
                  currentItems.map((item) => (
                    <tr key={item.id} className="border-t border-t-[#ced2e9]">
                      <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-120 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        <img
                          src={`http://localhost:8080${item.productimage}`}
                          alt={item.productImage}
                          className="w-25 h-25"
                        />
                      </td>
                      <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-240 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.productname}
                      </td>
                      <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-360 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.price}
                      </td>
                      <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-360 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.category}
                      </td>
                      <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.stockquantity}
                      </td>
                      <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.taxrate}
                      </td>
                      <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal">
                        {item.description}
                      </td>
                      <td
                        onClick={() => handledelete(item.id)}
                        className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 cursor-pointer h-[72px] px-4 py-2 w-[400px] text-indigo-600 text-sm font-normal leading-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="flex bottom-0 justify-center items-center gap-3 mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from(
              { length: Math.ceil(getdata.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1 ? "bg-indigo-600 text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}

            <button
              disabled={
                currentPage === Math.ceil(getdata.length / itemsPerPage)
              }
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {model ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full mt-5 px-6 py-6 max-w-[960px] bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-screen">
            <form onSubmit={submitdata}>
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-[#0d0f1c] text-3xl font-bold">
                  Add New Product
                </h1>
              </div>

              {/* Grid Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Name */}
                <label className="flex flex-col">
                  <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                    Product Name
                  </span>
                  <input
                    type="text"
                    name="productname"
                    onChange={handlechange}
                    placeholder="Enter product name"
                    className={`h-14 p-4 rounded-xl border ${
                      errors.productname ? "border-red-500" : "border-[#ced3e9]"
                    } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 ${
                      errors.productname
                        ? "focus:ring-red-400"
                        : "focus:ring-indigo-600"
                    }`}
                  />
                  {errors.productname && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.productname}
                    </span>
                  )}
                </label>
                {/* Category */}
                <label className="flex flex-col">
                  <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                    Category
                  </span>
                  <select
                    name="category"
                    value={formdata.category}
                    onChange={handlechange}
                    className={`h-14 p-4 rounded-xl border ${
                      errors.category ? "border-red-500" : "border-[#ced3e9]"
                    } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none  focus:ring-2 ${
                      errors.category
                        ? "focus:ring-red-400"
                        : "focus:ring-indigo-600"
                    }`}
                  >
                    <option value="">Select category</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    <option value="groceries">Groceries</option>
                    <option value="apparel">Apparel</option>
                    <option value="home-garden">Home & Garden</option>
                    <option value="toys-games">Toys & Games</option>
                    <option value="sports-outdoors">Sports & Outdoors</option>
                    <option value="health-beauty">Health & Beauty</option>
                    <option value="automotive">Automotive</option>
                  </select>
                  {errors.category && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.category}
                    </span>
                  )}
                  {/* Error Message */}
                </label>
                {/* Purchase Price */}
                <label className="flex flex-col">
                  <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                    Price
                  </span>
                  <input
                    type="number"
                    name="price"
                    min="1"
                    value={formdata.price}
                    onChange={handlechange}
                    placeholder="Enter price"
                    className={`h-14 p-4 rounded-xl border ${
                      errors.price ? "border-red-500" : "border-[#ced3e9]"
                    } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 ${
                      errors.price
                        ? "focus:ring-red-400"
                        : "focus:ring-indigo-600"
                    }`}
                  />
                  {errors.price && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.price}
                    </span>
                  )}
                </label>
                {/* Stock Quantity */}
                <label className="flex flex-col">
                  <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                    Stock Quantity
                  </span>
                  <input
                    type="number"
                    name="stockquantity"
                    min="1"
                    value={formdata.stockquantity}
                    onChange={handlechange}
                    placeholder="Enter stock quantity"
                    className={`h-14 p-4 rounded-xl border ${
                      errors.stockquantity
                        ? "border-red-500"
                        : "border-[#ced3e9]"
                    } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 ${
                      errors.stockquantity
                        ? "focus:ring-red-400"
                        : "focus:ring-indigo-600"
                    }`}
                  />
                  {errors.stockquantity && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.stockquantity}
                    </span>
                  )}
                </label>
                {/* Product Image */}
                <label className="flex flex-col">
                  <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                    Upload Product Image
                  </span>
                  <input
                    type="file"
                    name="productImage"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer"
                  />

                  {errors.productImage && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.productImage}
                    </span>
                  )}
                </label>{" "}
                <label className="flex flex-col">
                  <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                    Discount %
                  </span>
                  <input
                    type="number"
                    name="taxrate"
                    min="1"
                    value={formdata.taxrate}
                    onChange={handlechange}
                    placeholder="Enter Product Discount"
                    className={`h-14 p-4 rounded-xl border ${
                      errors.taxrate ? "border-red-500" : "border-[#ced3e9]"
                    } bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 ${
                      errors.taxrate
                        ? "focus:ring-red-400"
                        : "focus:ring-indigo-600"
                    }`}
                  />

                  {errors.taxrate && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.taxrate}
                    </span>
                  )}
                </label>
                {/* Description (Full Width) */}
                <label className="flex flex-col md:col-span-2">
                  <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                    Product Description{" "}
                    <span className="text-[#7e818f] ">(Optional)</span>
                  </span>
                  <textarea
                    name="description"
                    value={formdata.description}
                    onChange={handlechange}
                    placeholder="Enter product description"
                    className="min-h-[120px] p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] shadow-sm placeholder:text-[#47579e] text-[#0d0f1c] focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
                  />
                  {errors.description && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.description}
                    </span>
                  )}
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={() => setmodel(!model)}
                  className="h-10 px-6 rounded-xl bg-[#EF4444] hover:bg-[#e08181] transition text-[white] text-sm font-bold"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="h-10 px-6 rounded-xl bg-[#10B981] hover:bg-[#88dfc2] transition text-white text-sm font-bold"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AdminProducts;
