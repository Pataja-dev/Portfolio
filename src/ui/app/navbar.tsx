
// "use client";
import Link from 'next/link';
import Image from 'next/image';

import React, { useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const navbarDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const dropdownNavbarLink = document.getElementById('dropdownNavbarLink');

    // Toggle the navbar on mobile
    const handleNavbarToggle = () => {
      if (navbarDropdownRef.current) {
        navbarDropdownRef.current.classList.toggle('hidden');
      }
    };

    // Hide the navbar when a nav link is clicked
    const handleNavLinkClick = () => {
      if (navbarDropdownRef.current) {
        navbarDropdownRef.current.classList.add('hidden');
      }
    };

    // Toggle the dropdown menu
    const handleDropdownToggle = () => {
      if (dropdownMenuRef.current) {
        dropdownMenuRef.current.classList.toggle('hidden');
      }
    };

    if (navbarToggle) {
      navbarToggle.addEventListener('click', handleNavbarToggle);
    }

    if (dropdownNavbarLink) {
      dropdownNavbarLink.addEventListener('click', handleDropdownToggle);
    }
    
    // Add event listeners to nav links
    const navLinks = document.querySelectorAll('#navbar-dropdown a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      if (navbarToggle) {
        navbarToggle.removeEventListener('click', handleNavbarToggle);
      }
      if (dropdownNavbarLink) {
        dropdownNavbarLink.removeEventListener('click', handleDropdownToggle);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-stone-400 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
             <Image
               src="/logo.png" 
               alt="Logo"
               width={150} 
              height={50} 
              className="cursor-pointer justify-self-start " 
            />
         </Link>
        <button
          id="navbar-toggle"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-900 rounded-lg md:hidden hover:bg-gray-400 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div ref={navbarDropdownRef} className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-stone-400 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-stone-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            < li>
              <a href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-stone-300 md:p-0 dark:text-white md:dark:hover:stone-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
            </li>
            < li>
              <a href="#skills" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-stone-300 md:p-0 dark:text-white md:dark:hover:text-stone-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
            </li>
            <li>
              <a href="#project" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-stone-300 md:p-0 dark:text-white md:dark:hover:text-stone-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-stone-300 md:p-0 dark:text-white md:dark:hover:text-stone-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




