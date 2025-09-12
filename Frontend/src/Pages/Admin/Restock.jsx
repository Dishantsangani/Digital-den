import React, { useEffect, useState } from "react";
import { getProductDataApi, restockProductApi } from "../../API/Admin/adminApi";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";
import { ToastContainer } from "react-toastify";
import Loader from "../../Component/Common/Loader";

const Restock = () => {
  const IMAGE_URL = import.meta.env.VITE_BACKEND_PORT;
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState("az");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filter + sort
  const filterdata = products
    ?.filter((p) =>
      p.productname?.toLowerCase().includes(searchInput.toLowerCase())
    )
    ?.sort((a, b) => {
      if (sortOption === "newest") return b.id - a.id;
      if (sortOption === "oldest") return a.id - b.id;
      if (sortOption === "az")
        return a.productname.localeCompare(b.productname);
      if (sortOption === "za")
        return b.productname.localeCompare(a.productname);
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterdata.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filterdata.length / itemsPerPage);

  const fetchProducts = async () => {
    try {
      const res = await getProductDataApi();
      setProducts(
        res.data.map((p) => ({ ...p, restockAmount: p.restockAmount || "" }))
      );
    } catch (error) {
      Toastifyerror(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRestockChange = (id, value) => {
    const quantity = Number(value);
    const newErrors = { ...errors };
    if (quantity < 0) newErrors[id] = "Quantity cannot be negative";
    else delete newErrors[id];
    setErrors(newErrors);

    setProducts(
      products.map((p) => (p.id === id ? { ...p, restockAmount: value } : p))
    );
  };

  const handleRestockAll = async () => {
    const restockItems = products
      .filter(
        (p) =>
          p.restockAmount !== "" &&
          !isNaN(Number(p.restockAmount)) &&
          !errors[p.id]
      )
      .map((p) => ({ id: p.id, stockquantity: Number(p.restockAmount) }));

    if (!restockItems.length) return;

    setLoading(true);
    try {
      const updatedProducts = await restockProductApi(restockItems);
      setProducts(
        products.map((p) => {
          const updated = updatedProducts.find((up) => up.id === p.id);
          return updated
            ? { ...p, stockquantity: updated.stockquantity, restockAmount: "" }
            : p;
        })
      );
    } catch (error) {
      Toastifyerror(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => setCurrentPage(1), [searchInput, sortOption]);

  return (
    <>
      <ToastContainer />
      {/* Header */}
      <div className="layout-content-container flex flex-col max-w-full flex-1">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto mb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl text-slate-900 font-bold">
              Restock Products
            </h1>
          </div>
        </div>
      </div>

      {/* Search + Sort */}
      <div className="px-5 py-3">
        <label className="flex flex-col min-w-72 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#47579e] flex border-none bg-slate-200 items-center justify-center pl-4 rounded-l-xl border-r-0">
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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search products"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border-none bg-slate-200 h-full placeholder:text-[#47579e] px-4 rounded-l-none border-l-0 text-base font-normal"
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

      {/* Table */}
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#ced3e9] bg-[#f8f9fc]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#f8f9fc]">
                <th className="px-4 py-3 text-left text-[#0d0f1c] w-[200px] text-sm font-medium">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-[#0d0f1c] w-[200px] text-sm font-medium">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-[#0d0f1c] w-[120px] text-sm font-medium">
                  Stock
                </th>
                <th className="px-4 py-3 text-left text-[#0d0f1c] w-[120px] text-sm font-medium">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-[#0d0f1c] w-[160px] text-sm font-medium">
                  Restock Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="text-center py-6">
                    <Loader />
                  </td>
                </tr>
              ) : currentItems.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-gray-500">
                    No products found
                  </td>
                </tr>
              ) : (
                currentItems.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t  h-[72px] border-t-[#ced3e9]"
                  >
                    <img
                      className="w-16 h-16 object-cover rounded"
                      src={`${IMAGE_URL}${product.productimage}`}
                    />

                    <td className="px-4 py-2 h-[72px] text-indigo-600">
                      {product.productname}
                    </td>
                    <td className="px-4 py-2 h-[72px] text-indigo-600">
                      {product.stockquantity}
                    </td>
                    <td className="px-4 py-2 h-[72px] text-indigo-600">
                      {product.price}
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        min="0"
                        placeholder="Qty"
                        value={product.restockAmount}
                        onChange={(e) =>
                          handleRestockChange(product.id, e.target.value)
                        }
                        className={`w-full px-3 py-2 text-sm border rounded-lg ${
                          errors[product.id]
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors[product.id] && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors[product.id]}
                        </p>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Restock button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleRestockAll}
            disabled={loading || Object.keys(errors).length > 0}
            className={`px-6 py-2 rounded text-white ${
              loading || Object.keys(errors).length > 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            {loading ? "Restocking..." : "Restock All"}
          </button>
        </div>

        {/* Pagination */}
        <div className="flex bottom-0 justify-center items-center gap-3 mt-4 flex-wrap">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-indigo-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Restock;
