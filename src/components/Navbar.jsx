import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav className="border-b dark:border-gray-700">
        <div className="container px-6 py-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
            </a>

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

          <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
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
    </header>
  );
};

export default Navbar;
