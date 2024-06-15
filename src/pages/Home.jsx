import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav className="border-b dark:border-gray-700">
        <div className="container px-6 py-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
            </a>
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
            <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8">
              <a className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">glasses Search</a>
              <a className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">How it works!</a>
              <a className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Why us?</a>
              <a className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Contact</a>
              <button className="flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Find your premium new glasses exported from US</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">We work with the best remunerated glasses dealers in the US to find your new glasses.</p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="mx-3">Premium selection</span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="mx-3">Insurance</span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="mx-3">All legal documents</span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="mx-3">From US glasses dealers</span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="mx-3">Payment Security</span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="mx-3">Fast shipping (+ Express)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
