import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Common/Navbarlogo.png";
import { useCart } from "../../Context/CartContext";

function Navbar() {
  const { cart, incrementItem, decrementItem, deleteItem } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDrawer = () => setIsOpen(!isOpen);

  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <nav className="py-3 w-full bg-gray-100 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <img src={logo} className="h-14 w-auto object-contain" alt="Logo" />

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              to="/"
              className="text-gray-500 hover:text-indigo-700 font-medium"
            ></Link>
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
            <div className="relative inline-block">
              <button
                onClick={toggleDrawer}
                className="ml-4 bg-indigo-600 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-indigo-700 relative"
              >
                Cart
              </button>
              {cart.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {cart.items.length}
                </span>
              )}
            </div>
          </div>

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
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-3 px-4">
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
            <div className="relative inline-block">
              <button
                onClick={toggleDrawer}
                className="ml-4 bg-indigo-600 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-indigo-700 relative"
              >
                Cart
              </button>

              {/* Cart Count Badge */}
              {cart.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {cart.items.length}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Cart Drawer */}
        {isOpen && (
          <div className="fixed inset-0 z-40 overflow-hidden" aria-modal="true">
            <div
              className="fixed inset-0 bg-gray-500/75"
              onClick={toggleDrawer}
            />
            <div className="absolute inset-0 overflow-hidden flex justify-end">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </h2>
                      <button
                        onClick={toggleDrawer}
                        className="text-gray-400 hover:text-gray-500"
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

                    <div className="mt-8">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cart.items.map((item) => (
                          <li key={item.id} className="flex py-6 items-center">
                            {/* Image */}
                            <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={`http://localhost:8080${item.image}`}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Info */}
                            <div className="ml-4 flex flex-1 flex-col justify-between min-h-[96px]">
                              {/* Name and price */}
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3 className="truncate w-1/2">{item.name}</h3>
                                <p className="w-1/4 text-right">
                                  ${item.price}
                                </p>
                              </div>

                              {/* Quantity controls */}
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={() => decrementItem(item.id)}
                                  className="px-2 py-1 border rounded hover:bg-gray-100 font-bold"
                                >
                                  −
                                </button>
                                <span className="w-8 text-center text-gray-700 font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => incrementItem(item.id)}
                                  className="px-2 py-1 border rounded hover:bg-gray-100 font-bold"
                                >
                                  +
                                </button>
                              </div>

                              {/* Remove button */}
                              <div className="mt-2">
                                <button
                                  onClick={() => deleteItem(item.id)}
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${totalPrice}</p>
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
        )}
      </nav>
    </>
  );
}

export default Navbar;
