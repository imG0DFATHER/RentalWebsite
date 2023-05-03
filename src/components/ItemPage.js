import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const ItemPage = (props) => {
  const history = useNavigate();

  const product = {
    name: props.item.title,
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Home', href: '' },
      { id: 2, name: 'Cameras', href: '' },
    ],
    images: [
      {
        // src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        src: 'https://unsplash.com/photos/h21weALdkCE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mjd8fHNvbnklMjBhbHBoYSUyMGE3aWlpfGVufDB8fHx8MTY4MjM5MjQ1Mg&force=true&w=1920',
        alt: 'Model wearing plain white basic tee.',
      },
      {
        // src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        src: 'https://unsplash.com/photos/cgZK8jDgMhs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8c29ueSUyMGFscGhhJTIwYTdpaWl8ZW58MHx8fHwxNjgyMzkyNDI2&force=true&w=1920',
        // src: 'https://unsplash.com/photos/4ZFp8MEU2lY/download?force=true&w=1920',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        // src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        // src: 'https://unsplash.com/photos/8ikE18hSfrk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgyMzkyODc2&force=true&w=640',
        src: 'https://unsplash.com/photos/6qesnUQceJA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8c29ueSUyMGFscGhhJTIwYTdpaWl8ZW58MHx8fHwxNjgyMzkyNDI2&force=true&w=1920',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        // src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        // https://unsplash.com/photos/8ikE18hSfrk
        // src: 'https://unsplash.com/photos/8ikE18hSfrk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgyMzkyODc2&force=true&w=1920',
        src: 'https://unsplash.com/photos/6PWIV4dOH-4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fHNvbnklMjBhbHBoYSUyMGE3aWlpfGVufDB8fHx8MTY4MjkyNDY0NA&force=true&w=1920',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };
  const reviews = { href: '#', average: 4, totalCount: 117 };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  // export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <>
      <Header />
      <div className="bg-white font-link">
        <div className="pt-3 pl-14 pr-14">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-12 sm:px-6 lg:max-w-7xl lg:px-12"
            >
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      onClick={() => {
                        // if (breadcrumb.id === 1) {
                        //   history('/dashboard');
                        // } else {
                        //   history('/dashboard/Cameras');
                        // }
                      }}
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
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
              ))}
              <li className="text-sm">
                <a
                  href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}

          <div className="grid grid-cols-9 grid-rows-6 gap-6 mx-auto mt-3 lg:max-w-7xl sm:px-6 ">
            <div className="col-span-3 row-span-4 hidden overflow-hidden rounded-lg lg:block"><img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            /></div>
            <div className="col-span-3 row-span-2 col-start-1 row-start-5 hidden overflow-hidden rounded-lg lg:block"><img
              src={product.images[1].src}
              alt={product.images[1].alt}
              className="h-full w-full object-cover object-center"
            /></div>
            <div className="col-span-3 row-span-2 col-start-4 row-start-1 hidden overflow-hidden rounded-lg lg:block"><img
              src={product.images[2].src}
              alt={product.images[2].alt}
              className="h-full w-full object-cover object-center"
            /></div>
            <div className="col-span-3 row-span-4 col-start-4 row-start-3 hidden overflow-hidden rounded-lg lg:block"><img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            /></div>
            <div className="fixed inset-x-0 top-18 right-6 grid grid-cols-3">
              <div className="col-span-3 h-[420px] row-span-6 col-start-7 row-start-1 lg:border lg:border-gray-100 lg:bg-blur-xl lg:bg-site-blue/5 rounded-lg shadow-md ">
                <div className="lg:col-span-2 lg:border-l-4 lg:border-gray-200 lg:pr-8 mt-3 ml-4">
                  <h1 className="ml-2 text-2xl font-bold tracking-tight text-site-blue/80 sm:text-3xl">
                    {product.name}
                  </h1>
                </div>
                <div className='' >
                  <div className='flex flex-row justify-center mt-8 ml-4'>
                    <div className='cursor-pointer w-28 h-16 block bg-site-blue/30 border-0 border-site-blue/20 shadow-sm shadow-white mx-auto rounded-md text-white'>
                      <div className='flex flex-col mt-1'>
                        <div className='flex flex-row justify-center'>Day</div>
                        <div className='flex flex-row justify-center text-site-blue font-semibold text-xl'>₹ 1500</div>
                      </div>
                    </div>
                    <div className='cursor-pointer w-28 h-16 block bg-site-blue/30 border-0 border-site-blue/20 shadow-sm shadow-white mx-2 rounded-md text-white'>
                      <div className='flex flex-col mt-1'>
                        <div className='flex flex-row justify-center'>Week</div>
                        <div className='flex flex-row justify-center text-site-blue font-semibold text-xl'>₹ 2800</div>
                      </div>
                    </div>
                    <div className='cursor-pointer w-28 h-16 block bg-white border-0 border-site-blue/20 shadow-inner shadow-black/40 ml-2 mr-6 rounded-md text-bg-site-blue/40'>
                      <div className='flex flex-col mt-1'>
                        <div className='flex flex-row justify-center'>Month</div>
                        <div className='flex flex-row justify-center text-site-blue font-semibold text-xl'>₹ 15k</div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='flex rounded-full w-80 h-16 ml-7 mt-10 bg-site-blue/30 border border-white cursor-pointer'>
                  {/* <div className='rounded-lg w-80 h-16 ml-7 mt-10 bg-site-blue/20 border border-white cursor-pointer'> */}
                  <div className='m-auto font-link text-white font-bold text-xl'>
                    Checkout  Dates
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>


          {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div> */}

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            {/* <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p> */}

            {/* Reviews */}
            {/* <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-gray-900'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10"> */}
            {/* Colors */}
            {/* <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div> */}

            {/* Sizes */}
            {/* <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              active ? 'ring-2 ring-indigo-500' : '',
                              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked
                                      ? 'border-indigo-500'
                                      : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
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
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div> */}

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
