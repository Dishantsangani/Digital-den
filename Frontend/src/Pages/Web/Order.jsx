import React from "react";

function Order() {
  return (
    <>
      {/* Progress bar */}
      <div className="flex max-w-screen-xl max-md:max-w-xl mt-4 mx-auto items-start">
        {/* Step 1 */}
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-indigo-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-sm text-white font-semibold">1</span>
            </div>
            <div className="w-full h-[3px] mx-4 rounded-lg bg-indigo-600" />
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-sm font-semibold text-slate-900">Cart</h6>
          </div>
        </div>

        {/* Step 2 */}
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-indigo-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-sm text-white font-semibold">2</span>
            </div>
            <div className="w-full h-[3px] mx-4 rounded-lg bg-indigo-600" />
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-sm font-semibold text-slate-900">Checkout</h6>
          </div>
        </div>

        {/* Step 3 - current */}
        <div>
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-indigo-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-sm text-white font-semibold">3</span>
            </div>
          </div>
          <div className="mt-2">
            <h6 className="text-sm font-semibold text-indigo-700">Order</h6>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-gray-100 py-10 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl">
          {/* Header */}
          <div className="bg-indigo-600 px-6 py-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-white">
                Order Confirmation
              </h2>
              <span className="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                Paid
              </span>
            </div>
            <p className="text-slate-200 text-sm mt-2">
              Thank you for your order!
            </p>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Shipping info */}
            <div className="bg-gray-100 rounded-xl p-4 mt-6">
              <h3 className="text-base font-medium text-slate-900 mb-4">
                Shipping Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Customer</p>
                  <p className="text-slate-900 text-sm font-medium mt-2">
                    Alex Johnson
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">
                    Shipping Method
                  </p>
                  <p className="text-slate-900 text-sm font-medium mt-2">
                    Express Delivery
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Address</p>
                  <p className="text-slate-900 text-sm font-medium mt-2">
                    123 Main St, Apt 4B
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Phone</p>
                  <p className="text-slate-900 text-sm font-medium mt-2">
                    (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            {/* Order items */}
            <div className="mt-6">
              <h3 className="text-base font-medium text-slate-900 mb-4">
                Order Items (2)
              </h3>
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex items-start gap-4 max-sm:flex-col">
                  <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                    <img
                      src="https://readymadeui.com/images/watch1.webp"
                      alt="Product"
                      className="w-14 h-14 object-contain rounded-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-slate-900">
                      Stylish Golden Watch
                    </h4>
                    <p className="text-slate-500 text-xs font-medium mt-2">
                      Color: Golden
                    </p>
                    <p className="text-slate-500 text-xs font-medium mt-1">
                      Qty: 1
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 text-sm font-semibold">
                      $129.00
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4 max-sm:flex-col border-t pt-4 border-gray-200">
                  <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                    <img
                      src="https://readymadeui.com/images/product14.webp"
                      alt="Product"
                      className="w-14 h-14 object-contain rounded-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-slate-900">
                      Velvet Sneaker
                    </h4>
                    <p className="text-slate-500 text-xs font-medium mt-2">
                      Color: Black/White
                    </p>
                    <p className="text-slate-500 text-xs font-medium mt-1">
                      Qty: 1
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 text-sm font-semibold">
                      $238.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-100 rounded-xl p-4 mt-6">
              <h3 className="text-base font-medium text-slate-900 mb-4">
                Order Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-sm text-slate-500 font-medium">Subtotal</p>
                  <p className="text-slate-900 text-sm font-semibold">
                    $367.00
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-slate-500 font-medium">Shipping</p>
                  <p className="text-slate-900 text-sm font-semibold">$0.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-slate-500 font-medium">Tax</p>
                  <p className="text-slate-900 text-sm font-semibold">$29.36</p>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-300">
                  <p className="text-[15px] font-semibold text-slate-900">
                    Total
                  </p>
                  <p className="text-[15px] font-semibold text-indigo-700">
                    $396.36
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm font-medium">
                Need help?{" "}
                <button className="text-indigo-700 hover:underline">
                  Contact us
                </button>
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-[15px] py-2 px-4 rounded-lg max-sm:-order-1 cursor-pointer transition duration-200">
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
