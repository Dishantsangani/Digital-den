import React from "react";

function AddProducts() {
  return (
    <div
      // className="flex justify-center bg-amber-50 "
      className="fixed inset-0 z-50 flex justify-center px-4 py-8 items-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-[1200px]">
        <div className="mb-6 px-2">
          <h1 className="text-[#0d0f1c] text-3xl font-bold">Add New Product</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 px-2">
          {/* Product Name */}
          <label className="flex flex-col">
            <p className="text-base font-medium text-[#0d0f1c] pb-2">
              Product Name
            </p>
            <input
              placeholder="Enter product name"
              className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
            />
          </label>

          {/* Category */}
          <label className="flex flex-col">
            <p className="text-base font-medium text-[#0d0f1c] pb-2">
              Category
            </p>
            <select className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none">
              <option value="">Select category</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
          </label>

          {/* Supplier */}
          <label className="flex flex-col">
            <p className="text-base font-medium text-[#0d0f1c] pb-2">
              Supplier
            </p>
            <select className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none">
              <option value="">Select supplier</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
          </label>

          {/* Purchase Price */}
          <label className="flex flex-col">
            <p className="text-base font-medium text-[#0d0f1c] pb-2">
              Purchase Price
            </p>
            <input
              placeholder="Enter purchase price"
              className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
            />
          </label>

          {/* Selling Price */}
          <label className="flex flex-col">
            <p className="text-base font-medium text-[#0d0f1c] pb-2">
              Selling Price
            </p>
            <input
              placeholder="Enter selling price"
              className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
            />
          </label>

          {/* Initial Stock */}
          <label className="flex flex-col">
            <p className="text-base font-medium text-[#0d0f1c] pb-2">
              Initial Stock Quantity
            </p>
            <input
              placeholder="Enter initial stock quantity"
              className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
            />
          </label>

          {/* Reorder Point */}
          <label className="flex flex-col">
            <p className="text-base font-medium text-[#0d0f1c] pb-2">
              Reorder Point
            </p>
            <input
              placeholder="Enter reorder point"
              className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
            />
          </label>

          {/* Description (spans full row) */}
          <label className="flex flex-col md:col-span-2 lg:col-span-3">
            <p className="text-base font-medium text-[#0d0f1c] pb-2">
              Description
            </p>
            <textarea
              placeholder="Enter product description"
              className="min-h-[140px] p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none resize-none"
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end px-2 mt-6">
          <button className="h-10 px-6 rounded-full bg-[#4768fa] text-white text-sm font-bold">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
