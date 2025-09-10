import React, { useEffect, useState } from "react";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";
import { generateInvoiceApi } from "../../API/Web/invoiceApi";
import { getOrderClientApi } from "../../API/Web/webOrderApi";
import { ToastContainer } from "react-toastify";
import { useCart } from "../../Context/CartContext";

function Order() {
  const { fetchCart } = useCart();

  const [getdata, setgetdata] = useState([]);

  const featchedData = async () => {
    try {
      const res = await getOrderClientApi();
      setgetdata(res.data);
    } catch (error) {
      Toastifyerror(error);
    }
  };

  useEffect(() => {
    featchedData();
  }, []);

  useEffect(() => {
    fetchCart();
  }, []);

  // Invoice
  const handledownloadinvoice = async () => {
    try {
      if (!getdata) return;

      const orderPayload = {
        order_id: getdata.order_id,
        products: getdata.products || [],
        customer_name: getdata.customer_name,
        full_address: getdata.full_address,
        phonenumber: getdata.phonenumber,
        email: getdata.email,
        subtotal: getdata.subtotal,
        discount: getdata.discount,
        total: getdata.total,
        created_at: getdata.created_at,
      };

      const blob = await generateInvoiceApi(orderPayload);
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "invoice.pdf";
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      Toastifyerror(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-100">
        {/* Progress bar */}
        <div className="flex max-w-screen-xl  max-md:max-w-xl  mx-auto items-start">
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
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-3xl">
            {/* Header */}
            <div className="bg-indigo-600 px-6 py-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-white">
                  Order Confirmation
                </h2>
              </div>
              <p className="text-slate-200 text-sm mt-2">
                Thank you for your order!
              </p>
            </div>
            {/* Body */}
            <div className="p-6">
              {getdata && (
                <div>
                  {/* Shipping info */}
                  <div className="bg-gray-100 rounded-xl p-4 mt-6">
                    <h3 className="text-base font-medium text-slate-900 mb-4">
                      Shipping Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-slate-500 text-sm font-medium">
                          Customer
                        </p>
                        <p className="text-slate-900 text-sm font-medium mt-2">
                          {getdata.customer_name}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm font-medium">
                          Shipping Method
                        </p>
                        <p className="text-slate-900 text-sm font-medium mt-2">
                          {getdata.shipping_method || "Standard Delivery"}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm font-medium">
                          Address
                        </p>
                        <p className="text-slate-900 text-sm font-medium mt-2">
                          {getdata.full_address}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm font-medium">
                          Phone
                        </p>
                        <p className="text-slate-900 text-sm font-medium mt-2">
                          {getdata.phonenumber}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order items */}
                  <div className="mt-6">
                    <h3 className="text-base font-medium text-slate-900 mb-4">
                      Order Items ({getdata.products?.length || 0})
                    </h3>
                    <div className="space-y-4">
                      {getdata.products?.map((product, pIndex) => (
                        <div
                          key={pIndex}
                          className={`flex items-start gap-4 max-sm:flex-col ${
                            pIndex > 0 ? "border-t pt-4 border-gray-200" : ""
                          }`}
                        >
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-slate-900">
                              {product.product_name}
                            </h4>
                            <p className="text-slate-500 text-xs font-medium mt-2">
                              Qty: {product.quantity}
                            </p>
                            {product.discount > 0 && (
                              <p className="text-slate-500 text-xs font-medium mt-1">
                                Discount: ${product.discount}
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-slate-900 text-sm font-semibold">
                              ${product.sub_total}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-100 rounded-xl p-4 mt-6">
                    <h3 className="text-base font-medium text-slate-900 mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <p className="text-sm text-slate-500 font-medium">
                          Subtotal
                        </p>
                        <p className="text-slate-900 text-sm font-semibold">
                          ${getdata.subtotal}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-slate-500 font-medium">
                          Discount
                        </p>
                        <p className="text-slate-900 text-sm font-semibold">
                          -${getdata.discount}
                        </p>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-gray-300">
                        <p className="text-[15px] font-semibold text-slate-900">
                          Total
                        </p>
                        <p className="text-[15px] font-semibold text-indigo-700">
                          ${getdata.total}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                <button
                  type="button"
                  onClick={handledownloadinvoice}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-[15px] py-2 px-4 rounded-lg max-sm:-order-1 cursor-pointer transition duration-200"
                >
                  Download Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
