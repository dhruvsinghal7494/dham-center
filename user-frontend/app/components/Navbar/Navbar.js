"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Guruji.webp";
// import "flowbite";

// const Navbar = () => {
//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <Image
//             src="/Guruji.webp"
//             className="h-8"
//             alt="Flowbite Logo"
//             width="32"
//             height="36"
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             NSP
//           </span>
//         </a>

//         <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <button
//             type="button"
//             className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//             id="user-menu-button"
//             aria-expanded="false"
//             data-dropdown-toggle="user-dropdown"
//             data-dropdown-placement="bottom"
//           >
//             <span className="sr-only">Open user menu</span>
//             <Image
//               className="w-8 h-8 rounded-full"
//               src="/noavatar.png"
//               alt="user photo"
//               width="20"
//               height="20"
//             />
//           </button>

//           {/* dropdown menu */}
//           {/* <div
//             className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
//             id="user-dropdown"
//           >
//             <div className="px-4 py-3">
//               <span className="block text-sm text-gray-900 dark:text-white">
//                 Bonnie Green
//               </span>
//               <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
//                 name@flowbite.com
//               </span>
//             </div>
//             <ul className="py-2" aria-labelledby="user-menu-button">
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                 >
//                   Dashboard
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                 >
//                   Settings
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                 >
//                   Earnings
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                 >
//                   Sign out
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <button
//             data-collapse-toggle="navbar-user"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-user"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div> */}

//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-user"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex items-center space-x-6 rtl:space-x-reverse">
//           <a
//             href="tel:5541251234"
//             className="text-sm  text-gray-500 dark:text-white hover:underline"
//           >
//             (555) 412-1234
//           </a>
//           <a
//             href="#"
//             className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
//           >
//             Login
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  // const [color, setColor] = useState(false);
  const [selected, setSelected] = useState("home");
  // const ref = useRef(selected);

  // const handleColor = () => {
  //   !setSelected;
  //   ref.current.color = "bg-blue-800";
  // };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={Logo}
              className="h-8"
              alt="Flowbite Logo"
              width="32"
              height="36"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mahabrahmrishi
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
            {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                {/* <a
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                > */}
                <a
                  href="/"
                  className={`flex items-center space-x-3 rtl:space-x-reverse hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ${selected === "home" && "text-blue-500"}`}
                  onClick={() => setSelected("home")}
                >
                  Home
                </a>
              </li>
              <li>
                {/* <a
                  href="/pages/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                > */}
                <a
                  href="/pages/about"
                  className={`flex items-center space-x-3 rtl:space-x-reverse hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ${selected === "about" && "text-blue-500"}`}
                  onClick={() => setSelected("about")}
                >
                  About
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li> */}
              <li>
                {/* <a
                  href="/pages/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                > */}
                <a
                  href="/pages/contact"
                  className={`flex items-center space-x-3 rtl:space-x-reverse hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ${selected === "contact" && "text-blue-500"}`}
                  onClick={() => setSelected("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
