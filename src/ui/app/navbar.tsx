
// "use client";
import Link from 'next/link';
import Image from 'next/image';
// import { Navbar} from "flowbite-react";

// const Navbars = () => {
//   return (
//   //   <nav className="bg-stone-400  sticky top-0 start-0 z-50">
//   //   <div className=" mx-auto px-4 py-4">
//   //     <div className="flex justify-between items-center ">
//   //       <div className="text-xl font-bold">
//   //       <Link href="/">
//   //             <Image
//   //               src="/logo.png" 
//   //               alt="Logo"
//   //               width={150} 
//   //               height={50} 
//   //               className="cursor-pointer justify-self-start" 
//   //             />
//   //           </Link>
//   //       </div>
//   //       <div className="space-x-10 pr-20">
//   //         <Link href="/" className=" text-stone-900 hover:text-stone-500">Home</Link>
//   //         <Link href="#skills" className=" text-stone-900 hover:text-stone-500">Skills</Link>
//   //         <Link href="#projects" className=" text-stone-900 hover:text-stone-500">Projects</Link>
//   //         <Link href="#contact" className=" text-stone-900 hover:text-stone-500">Contact</Link>
//   //       </div>
//   //     </div>
//   //   </div>
//   // </nav>
//   <Navbar fluid rounded>
//   <Navbar.Brand href="https://flowbite.com/">
//     <img
//       src="https://flowbite.com/docs/images/logo.svg"
//       className="mr-3 h-6 sm:h-9"
//       alt="Flowbite Logo"
//     />
//     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//       Flowbite
//     </span>
//   </Navbar.Brand>
//   <Navbar.Toggle />
//   <Navbar.Collapse>
//     <Navbar.Link href="/navbars" active>
//       Home
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">About</Navbar.Link>
//     <Navbar.Link href="/navbars">Services</Navbar.Link>
//     <Navbar.Link href="/navbars">Pricing</Navbar.Link>
//     <Navbar.Link href="/navbars">Contact</Navbar.Link>
//   </Navbar.Collapse>
// </Navbar>

//   );
// };

// export default Navbars;

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
              <a href="#/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
            </li>
            < li>
              <a href="#skills" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
            </li>
            <li>
              <a href="#project" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




