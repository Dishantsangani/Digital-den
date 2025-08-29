import React from "react";

function AddOrder() {
  return (
    <div className="layout-content-container flex flex-col py-5 max-w-[960px] w-full">
      {/* Header */}
      <div className="flex justify-between p-4">
        <p className="text-[#0d0f1c] text-[32px] font-bold">New Order</p>
      </div>

      {/* Row 1: Customer & Order Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-3">
        <label className="flex flex-col">
          <p className="text-base font-medium text-[#0d0f1c] pb-2">Customer</p>
          <select className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none">
            <option value="">Select Customer</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </label>

        <label className="flex flex-col">
          <p className="text-base font-medium text-[#0d0f1c] pb-2">
            Order Date
          </p>
          <input
            placeholder="MM/DD/YYYY"
            className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
          />
        </label>
      </div>

      {/* Row 2: Products Table */}
      <div className="px-4 py-3">
        <h3 className="text-lg font-bold text-[#0d0f1c] pb-2">Products</h3>
        <div className="overflow-hidden rounded-xl border border-[#ced3e9] bg-[#f8f9fc]">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f8f9fc]">
                <th className="text-left px-4 py-3 text-sm font-medium text-[#0d0f1c]">
                  Product
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-[#0d0f1c]">
                  Quantity
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-[#0d0f1c]">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Laptop", qty: 2, price: "$1200" },
                { name: "Mouse", qty: 2, price: "$25" },
                { name: "Keyboard", qty: 1, price: "$75" },
              ].map((item, index) => (
                <tr key={index} className="border-t border-[#ced3e9]">
                  <td className="px-4 py-3 text-sm text-[#0d0f1c]">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#47579e]">
                    {item.qty}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#47579e]">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Row 3: Total Amount & Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-3">
        <label className="flex flex-col">
          <p className="text-base font-medium text-[#0d0f1c] pb-2">
            Total Amount
          </p>
          <input
            placeholder="Enter amount"
            className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
          />
        </label>

        <label className="flex flex-col">
          <p className="text-base font-medium text-[#0d0f1c] pb-2">Status</p>
          <select className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none">
            <option value="">Select Status</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </label>
      </div>

      {/* Row 4: Notes */}
      <div className="px-4 py-3">
        <label className="flex flex-col">
          <p className="text-base font-medium text-[#0d0f1c] pb-2">Notes</p>
          <textarea
            placeholder="Additional details"
            className="min-h-36 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none resize-none"
          />
        </label>
      </div>

      {/* Row 5: Action Buttons */}
      <div className="flex justify-end px-4 py-6 gap-4">
        <button className="h-10 px-6 rounded-full bg-[#e6e9f4] text-[#0d0f1c] text-sm font-bold">
          Cancel
        </button>
        <button className="h-10 px-6 rounded-full bg-[#4264fa] text-white text-sm font-bold">
          Create Order
        </button>
      </div>
    </div>
  );
}

export default AddOrder;
