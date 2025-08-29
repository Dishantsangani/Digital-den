import React from "react";

function AddCustomer() {
  return (
    <div>
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col w-[512px]  py-5 max-w-[960px] flex-1">
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <p class="text-[#0f111a] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Add New Customer
            </p>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#0f111a] text-base font-medium leading-normal pb-2">
                Customer Name
              </p>
              <input
                placeholder="Enter customer name"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-[#e9eaf2] focus:border-none h-14 placeholder:text-[#56618f] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#0f111a] text-base font-medium leading-normal pb-2">
                Contact Person
              </p>
              <input
                placeholder="Enter contact person's name"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-[#e9eaf2] focus:border-none h-14 placeholder:text-[#56618f] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#0f111a] text-base font-medium leading-normal pb-2">
                Email
              </p>
              <input
                placeholder="Enter email address"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-[#e9eaf2] focus:border-none h-14 placeholder:text-[#56618f] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#0f111a] text-base font-medium leading-normal pb-2">
                Phone Number
              </p>
              <input
                placeholder="Enter phone number"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-[#e9eaf2] focus:border-none h-14 placeholder:text-[#56618f] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#0f111a] text-base font-medium leading-normal pb-2">
                Address
              </p>
              <textarea
                placeholder="Enter customer address"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-[#e9eaf2] focus:border-none min-h-36 placeholder:text-[#56618f] p-4 text-base font-normal leading-normal"
              ></textarea>
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#0f111a] text-base font-medium leading-normal pb-2">
                Notes
              </p>
              <textarea
                placeholder="Additional details about the customer"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-[#e9eaf2] focus:border-none min-h-36 placeholder:text-[#56618f] p-4 text-base font-normal leading-normal"
              ></textarea>
            </label>
          </div>
          <div class="flex justify-stretch">
            <div class="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
              <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e9eaf2] text-[#0f111a] text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Cancel</span>
              </button>
              <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eaedfa] text-[#0f111a] text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
