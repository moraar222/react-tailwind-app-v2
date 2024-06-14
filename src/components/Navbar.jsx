import React from 'react';

const Navbar = () => {
  return (
    <nav className="relative z-0 flex border rounded-xl divide-x divide-gray-200 overflow-hidden dark:border-neutral-700 dark:divide-neutral-700">
      <a className="group relative min-w-0 flex-1 bg-white py-4 px-4 border-b-2 border-b-blue-600 text-gray-800 text-sm font-medium text-center overflow-hidden focus:z-10 focus:outline-none focus:text-blue-600 dark:bg-neutral-800 dark:text-neutral-300" aria-current="page" href="#">
        Active
      </a>
      <a className="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-neutral-400" href="#">
        Link
      </a>
      <a className="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-neutral-400" href="#">
        Link
      </a>
      <a className="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-400 text-sm font-medium text-center pointer-events-none overflow-hidden focus:z-10 focus:outline-none dark:bg-neutral-800 dark:text-neutral-600" href="#">
        Disabled
      </a>
    </nav>
  );
};

export default Navbar;
