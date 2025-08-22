import React from "react";

function Report() {
  return (
    <div className="layout-content-container mt-5 flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#0d0f1c] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Dashboard
        </p>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#ced2e9]">
          <p className="text-[#0d0f1c] text-base font-medium leading-normal">
            Total Stock Value
          </p>
          <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
            $125,450
          </p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#ced2e9]">
          <p className="text-[#0d0f1c] text-base font-medium leading-normal">
            Low Stock Items
          </p>
          <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
            15
          </p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#ced2e9]">
          <p className="text-[#0d0f1c] text-base font-medium leading-normal">
            Orders to Fulfill
          </p>
          <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
            8
          </p>
        </div>
      </div>
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Recent Activity
      </h2>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#ced2e9] bg-[#f8f9fc]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#f8f9fc]">
                <th className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Date
                </th>
                <th className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Activity
                </th>
                <th className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-[#ced2e9]">
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  2024-03-15
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  Received Stock
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  100 units of Product A
                </td>
              </tr>
              <tr className="border-t border-t-[#ced2e9]">
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  2024-03-14
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  Order Shipped
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  Order #12345 for Customer B
                </td>
              </tr>
              <tr className="border-t border-t-[#ced2e9]">
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  2024-03-13
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  Low Stock Alert
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  Product C below reorder point
                </td>
              </tr>
              <tr className="border-t border-t-[#ced2e9]">
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  2024-03-12
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  New Order
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  Order #67890 from Customer D
                </td>
              </tr>
              <tr className="border-t border-t-[#ced2e9]">
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  2024-03-11
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  Stock Adjustment
                </td>
                <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                  Adjusted stock for Product E
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n                          @container(max-width:120px){.table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120{display: none;}}\n                @container(max-width:240px){.table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240{display: none;}}\n                @container(max-width:360px){.table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360{display: none;}}\n              ",
          }}
        />
      </div>
    </div>
  );
}

export default Report;
