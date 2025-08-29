import React from "react";

function Exportreport() {
  return (
    <div>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0d0f1c]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">
              StockPilot
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-[#0d0f1c] text-sm font-medium leading-normal"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="text-[#0d0f1c] text-sm font-medium leading-normal"
                href="#"
              >
                Inventory
              </a>
              <a
                className="text-[#0d0f1c] text-sm font-medium leading-normal"
                href="#"
              >
                Orders
              </a>
              <a
                className="text-[#0d0f1c] text-sm font-medium leading-normal"
                href="#"
              >
                Customers
              </a>
              <a
                className="text-[#0d0f1c] text-sm font-medium leading-normal"
                href="#"
              >
                Reports
              </a>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e6e9f4] text-[#0d0f1c] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div
                className="text-[#0d0f1c]"
                data-icon="Bell"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBp1VCFPnKr1q0A5bGX2bDcZLGGq-PcSHwtJGAm_4uZfDVfDSytTltN9hoDgV9YGXMSmeJ2ccibmj4Hgo64hZ5P8k4cp1EYEzd_LUi652v68qEvN36B0SLYdBThQsFW-NYOYbDqZRRuyDxp-TaTjJRDFIxV4SPlskUbckXrymxZNOPaUQAoeMX1ozGW4v0Lm2Sm6LK5PB_q7KBS-LtG56syJghG2wBAWhN3KmxigZX8CYgT-pv4UHzR6Gww9nvBNd4APBViDOClEfzQ")',
              }}
            />
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d0f1c] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Export Report
              </p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d0f1c] text-base font-medium leading-normal pb-2">
                  Report Type
                </p>
                <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced3e9] bg-[#f8f9fc] focus:border-[#ced3e9] h-14 bg-[image:--select-button-svg] placeholder:text-[#47579e] p-[15px] text-base font-normal leading-normal">
                  <option value="one" />
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d0f1c] text-base font-medium leading-normal pb-2">
                  Date Range
                </p>
                <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced3e9] bg-[#f8f9fc] focus:border-[#ced3e9] h-14 bg-[image:--select-button-svg] placeholder:text-[#47579e] p-[15px] text-base font-normal leading-normal">
                  <option value="one" />
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d0f1c] text-base font-medium leading-normal pb-2">
                  Output Format
                </p>
                <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced3e9] bg-[#f8f9fc] focus:border-[#ced3e9] h-14 bg-[image:--select-button-svg] placeholder:text-[#47579e] p-[15px] text-base font-normal leading-normal">
                  <option value="one" />
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Customize Report
            </h3>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#ced3e9] border-2 bg-transparent text-[#4264fa] checked:bg-[#4264fa] checked:border-[#4264fa] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#ced3e9] focus:outline-none"
                  defaultChecked=""
                />
                <p className="text-[#0d0f1c] text-base font-normal leading-normal">
                  Include Product Details
                </p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#ced3e9] border-2 bg-transparent text-[#4264fa] checked:bg-[#4264fa] checked:border-[#4264fa] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#ced3e9] focus:outline-none"
                  defaultChecked=""
                />
                <p className="text-[#0d0f1c] text-base font-normal leading-normal">
                  Include Stock Levels
                </p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#ced3e9] border-2 bg-transparent text-[#4264fa] checked:bg-[#4264fa] checked:border-[#4264fa] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#ced3e9] focus:outline-none"
                />
                <p className="text-[#0d0f1c] text-base font-normal leading-normal">
                  Include Supplier Information
                </p>
              </label>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#4264fa] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exportreport;
