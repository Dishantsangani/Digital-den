import React from "react";

function Products() {
  return (
    <>
      <div className="bg-white ">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    Men
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    Clothing
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  Basic Tee 6-Pack
                </a>
              </li>
            </ol>
          </nav>
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
              alt="Two each of gray, white, and black shirts laying flat."
              className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
              alt="Model wearing plain black basic tee."
              className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              alt="Model wearing plain gray basic tee."
              className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
              alt="Model wearing plain white basic tee."
              className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
            />
          </div>
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Basic Tee 6-Pack
              </h1>
            </div>
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">$192</p>
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {/* Active: "text-gray-900", Default: "text-gray-200" */}
                    <svg
                      className="size-5 shrink-0 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="size-5 shrink-0 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="size-5 shrink-0 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="size-5 shrink-0 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="size-5 shrink-0 text-gray-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    117 reviews
                  </a>
                </div>
              </div>
              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <fieldset aria-label="Choose a color" className="mt-4">
                    <div className="flex items-center gap-x-3">
                      <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                        <input
                          aria-label="White"
                          type="radio"
                          name="color-choice"
                          defaultValue="white"
                          defaultChecked=""
                          className="size-8 appearance-none rounded-full bg-white forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3"
                        />
                      </div>
                      <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                        <input
                          aria-label="Gray"
                          type="radio"
                          name="color-choice"
                          defaultValue="gray"
                          className="size-8 appearance-none rounded-full bg-gray-200 forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3"
                        />
                      </div>
                      <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                        <input
                          aria-label="Black"
                          type="radio"
                          name="color-choice"
                          defaultValue="black"
                          className="size-8 appearance-none rounded-full bg-gray-900 forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-900 focus-visible:outline-3 focus-visible:outline-offset-3"
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>
                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium text-gray-200 uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="XXS"
                          disabled=""
                          className="sr-only"
                        />
                        <span>XXS</span>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            className="absolute inset-0 size-full stroke-2 text-gray-200"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1={0}
                              y1={100}
                              x2={100}
                              y2={0}
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="XS"
                          className="sr-only"
                        />
                        <span>XS</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="S"
                          className="sr-only"
                        />
                        <span>S</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="M"
                          className="sr-only"
                        />
                        <span>M</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="L"
                          className="sr-only"
                        />
                        <span>L</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="XL"
                          className="sr-only"
                        />
                        <span>XL</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="2XL"
                          className="sr-only"
                        />
                        <span>2XL</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                      {/* Active: "ring-2 ring-indigo-500" */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="3XL"
                          className="sr-only"
                        />
                        <span>3XL</span>
                        {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                    </div>
                  </fieldset>
                </div>
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  Add to bag
                </button>
              </form>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    The Basic Tee 6-Pack allows you to fully express your
                    vibrant personality with three grayscale options. Feeling
                    adventurous? Put on a heather gray tee. Want to be a
                    trendsetter? Try our exclusive colorway: "Black". Need to
                    add an extra pop of color to your outfit? Our white tee has
                    you covered.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Hand cut and sewn locally
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Dyed with our proprietary colors
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Pre-washed &amp; pre-shrunk
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Ultra-soft 100% cotton
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    The 6-Pack includes two black, two white, and two heather
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    "Charcoal Gray" limited release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Origin</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Designed by Good Goods, Inc.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Material</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Solid walnut base with rare earth magnets and powder coated
                  steel card cover
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Dimensions</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  6.25" x 3.55" x 1.15"
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Finish</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Hand sanded and finished with natural oil
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Includes</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Wood card tray and 3 refill packs
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Considerations</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Made from natural materials. Grain and color vary with each
                  item.
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
