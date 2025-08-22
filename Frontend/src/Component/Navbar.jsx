import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/Navbarlogo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <>
      <nav className="py-5 w-full bg-gray-50 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} width={140} height={25} alt="Logo" />
            </div>

            {/* Hamburger button - mobile only */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link
                to="/"
                className="text-gray-500 hover:text-indigo-700 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-500 hover:text-indigo-700 font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-500 hover:text-indigo-700 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/products"
                className="text-gray-500 hover:text-indigo-700 font-medium"
              >
                Products
              </Link>
              <Link
                to="/team"
                className="text-gray-500 hover:text-indigo-700 font-medium"
              >
                Teams
              </Link>
              <button
                onClick={toggleDrawer}
                className="ml-4 bg-indigo-600 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-indigo-700"
              >
                Cart
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-3">
              <Link
                to="/"
                className="block text-gray-700 hover:text-indigo-700 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-indigo-700 font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-indigo-700 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/products"
                className="block text-gray-700 hover:text-indigo-700 font-medium"
              >
                Products
              </Link>
              <Link
                to="/team"
                className="block text-gray-700 hover:text-indigo-700 font-medium"
              >
                Teams
              </Link>
              <button
                onClick={toggleDrawer}
                className="w-full bg-indigo-600 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-indigo-700"
              >
                Cart
              </button>
            </div>
          )}
        </div>

        {isOpen && (
          <div
            className="relative z-10"
            aria-labelledby="drawer-title"
            role="dialog"
            aria-modal="true"
          >
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-gray-500/75 transition-opacity"
              aria-hidden="true"
              onClick={toggleDrawer} // Click outside to close
            />

            <div className="fixed inset-0 z-40 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <h2
                            className="text-lg font-medium text-gray-900"
                            id="drawer-title"
                          >
                            Shopping cart
                          </h2>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              onClick={toggleDrawer}
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Close panel</span>
                              <svg
                                className="size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Cart Items */}
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                              <li className="flex py-6">
                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                    alt="Throwback Hip Bag"
                                    className="size-full object-cover"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>Throwback Hip Bag</h3>
                                      <p className="ml-4">$90.00</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Salmon
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 1</p>
                                    <div className="flex">
                                      <button className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li className="flex py-6">
                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                                    alt="Medium Stuff Satchel"
                                    className="size-full object-cover"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>Medium Stuff Satchel</h3>
                                      <p className="ml-4">$32.00</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Blue
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 1</p>
                                    <div className="flex">
                                      <button className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$122.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            to="/checkout"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              onClick={toggleDrawer}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Continue Shopping →
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
