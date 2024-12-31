// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import {
//     FaInstagram,
//     FaFacebook,
//     FaSearch,
//     FaBars,
//     FaChevronDown,
//     FaChevronUp,
// } from "react-icons/fa";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { FaXTwitter } from "react-icons/fa6";
// // import menuData from "../../app/menuData";
// import { motion } from "framer-motion";
// import menuData from "@/data/menuData";
// import contactDetails from '../../data/contactDetails';

// const Header = () => {
//     const { address, email, phone } = contactDetails;
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeAccordion, setActiveAccordion] = useState(null);
 
//     const handleAccordionToggle = (itemName) => {
//         if (activeAccordion === itemName) {
//             setActiveAccordion(null);
//         } else {
//             setActiveAccordion(itemName);
//         }
//     };



//     return (
//         <header>

//             {/* Upper Header */}
//             <section className="bg-[#E6F2EF] ">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="bg-[#E6F2EF] hidden md:flex items-center justify-between px-4 py-2 text-sm">
//                 <div className="flex items-center space-x-3 text-[#00634A]">
//                     <span>Call Us:{phone}</span>
//                     <span className="border-l h-5 border-[#00634A] px-1">
//                   {email}
//                     </span>
                   
//                 </div>
//                 <div className="flex space-x-2 items-end">
              
//   <Link href="https://www.instagram.com/birsamundamf/" target="_blank" passHref>
//     <FaInstagram className="hover:text-[#588D7F]" />
//   </Link>
//   <Link href="https://twitter.com" target="_blank" passHref>
//     <FaXTwitter className="hover:text-[#588D7F]" />
//   </Link>
//   <Link href="https://www.facebook.com/birsamf/" target="_blank" passHref>
//     <FaFacebook className="hover:text-[#588D7F]" />
//   </Link>
//   <Link href="https://www.linkedin.com" target="_blank" passHref>
//     <AiOutlineYoutube className="hover:text-[#588D7F]" />
//   </Link>
// </div>
                 
//             </div>
// </div>
// </section>



//             {/* Navbar */}
//             <section className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <nav className="">

//                 <div className="container mx-auto flex items-center justify-between px-4 py-3">
//                     {/* Hamburger Menu */}
//                     <div
//                         className="md:hidden flex items-center text-[#00634A] cursor-pointer"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <FaBars className="text-2xl hover:text-[#588D7F]" />
//                     </div>

//                     {/* Logo */}
//                     <div className="flex items-center justify-center md:justify-start flex-shrink-0">
//                         <Link href="/">
//                             <img
//                                 src="/images/01.png"
//                                 alt="logo"
//                                 className="w-20 h-auto md:w-28"
//                             />
//                         </Link>
//                     </div>

//                     {/* Navbar Links (Desktop Only) */}
//                     <div className="hidden md:flex items-center space-x-6">
//                         {menuData.map((item) => (
//                             <div key={item.name} className="relative group">
//                                 <Link
//                                     href={item.href}
//                                     className="text-[#00634A] hover:text-[#588D7F] transition duration-300"
//                                 >
//                                     {item.name}
//                                 </Link>
//                                 {item.submenu && (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: -10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -10 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="absolute text-sm left-0 w-48 bg-white shadow-lg  border border-gray-200 z-10 group-hover:block hidden"
//                                     >
//                                         <ul className="space-y-2 p-2">
//                                             {item.submenu.map((subitem) => (
//                                                 <li key={subitem.name}>
//                                                     <Link
//                                                         href={subitem.href}
//                                                         className="text-[#00634A] hover:text-[#588D7F] block px-3 py-2"
//                                                     >
//                                                         {subitem.name}
//                                                     </Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </motion.div>
//                                 )}
//                             </div>
//                         ))}
//                         <FaSearch className="text-[#00634A] hover:text-[#588D7F] cursor-pointer" />
//                         <Link
//                             href="/donate"
//                             className="bg-[#00634A] text-white px-4 py-2  hover:bg-[#588D7F] transition duration-300"
//                         >
//                             Donate
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 <motion.div
//                     initial={{ x: "-100%" }}
//                     animate={{
//                         x: isMenuOpen ? "0%" : "-100%",
//                         opacity: isMenuOpen ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-start p-6 space-y-4 md:hidden"
//                 >
//                     <div className="flex justify-between items-center w-full">
//                         <h2 className="text-[#00634A] text-xl font-semibold">
//                             Menu
//                         </h2>
//                         <button
//                             onClick={() => setIsMenuOpen(false)}
//                             className="text-[#00634A] hover:text-[#588D7F] text-2xl"
//                         >
//                             &times;
//                         </button>
//                     </div>
//                     {menuData.map((item) => (
//                         <div key={item.name} className="w-full">
//                             <div
//                                 className="flex justify-between items-center w-full text-[#00634A] hover:text-[#588D7F] text-lg"
//                                 onClick={() => handleAccordionToggle(item.name)}
//                             >
//                                 <Link href={item.href}>{item.name}</Link>
//                                 {item.submenu && (
//                                     <span>
//                                         {activeAccordion === item.name ? (
//                                             <FaChevronUp />
//                                         ) : (
//                                             <FaChevronDown />
//                                         )}
//                                     </span>
//                                 )}
//                             </div>
//                             {item.submenu &&
//                                 activeAccordion === item.name && (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: -10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -10 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="ml-4 space-y-2"
//                                     >
//                                         {item.submenu.map((subitem) => (
//                                             <Link
//                                                 key={subitem.name}
//                                                 href={subitem.href}
//                                                 className="text-[#00634A] hover:text-[#588D7F] block"
//                                             >
//                                                 {subitem.name}
//                                             </Link>
//                                         ))}
//                                     </motion.div>
//                                 )}
//                         </div>
//                     ))}
//                     <span className="bg-[#00634A] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#588D7F]">
//                         Donate
//                     </span>
//                 </motion.div>
//             </nav>
//             </div>
//             </section>
//         </header>
//     );
// };

// export default Header;

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import {
//     FaInstagram,
//     FaFacebook,
//     FaSearch,
//     FaBars,
//     FaChevronDown,
//     FaChevronUp,
// } from "react-icons/fa";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { FaXTwitter } from "react-icons/fa6";
// // import menuData from "../../app/menuData";
// import { motion } from "framer-motion";
// import menuData from "@/data/menuData";
// import contactDetails from '../../data/contactDetails';

// const Header = () => {
//     const { address, email, phone } = contactDetails;
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeAccordion, setActiveAccordion] = useState(null);

//     const handleAccordionToggle = (itemName) => {
//         if (activeAccordion === itemName) {
//             setActiveAccordion(null);
//         } else {
//             setActiveAccordion(itemName);
//         }
//     };

//     const handleMenuItemClick = () => {
//         setIsMenuOpen(false); // Close the menu when a link is clicked
//     };

//     return (
//         <header>
//             {/* Upper Header */}
//             <section className="bg-[#E6F2EF]">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="bg-[#E6F2EF] hidden md:flex items-center justify-between px-4 py-2 text-sm">
//                         <div className="flex items-center space-x-3 text-[#00634A]">
//                             <span>Call Us: {phone}</span>
//                             <span className="border-l h-5 border-[#00634A] px-1">
//                                 {email}
//                             </span>
//                         </div>
//                         <div className="flex space-x-2 items-end">
//                             <Link href="https://www.instagram.com/birsamundamf/" target="_blank" passHref>
//                                 <FaInstagram className="hover:text-[#588D7F]" />
//                             </Link>
//                             <Link href="https://twitter.com" target="_blank" passHref>
//                                 <FaXTwitter className="hover:text-[#588D7F]" />
//                             </Link>
//                             <Link href="https://www.facebook.com/birsamf/" target="_blank" passHref>
//                                 <FaFacebook className="hover:text-[#588D7F]" />
//                             </Link>
//                             <Link href="https://www.linkedin.com" target="_blank" passHref>
//                                 <AiOutlineYoutube className="hover:text-[#588D7F]" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Navbar */}
//             <section className="bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <nav className="">
//                         <div className="container mx-auto flex items-center justify-between px-4 py-3">
//                             {/* Hamburger Menu */}
//                             <div
//                                 className="md:hidden flex items-center text-[#00634A] cursor-pointer"
//                                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             >
//                                 <FaBars className="text-2xl hover:text-[#588D7F]" />
//                             </div>

//                             {/* Logo */}
//                             <div className="flex items-center justify-center md:justify-start flex-shrink-0">
//                                 <Link href="/">
//                                     <img
//                                         src="/images/01.png"
//                                         alt="logo"
//                                         className="w-20 h-auto md:w-28"
//                                     />
//                                 </Link>
//                             </div>

//                             {/* Navbar Links (Desktop Only) */}
//                             <div className="hidden md:flex items-center space-x-6">
//                                 {menuData.map((item) => (
//                                     <div key={item.name} className="relative group">
//                                         <Link
//                                             href={item.href}
//                                             className="text-[#00634A] hover:text-[#588D7F] transition duration-300"
//                                         >
//                                             {item.name}
//                                         </Link>
//                                         {item.submenu && (
//                                             <motion.div
//                                                 initial={{ opacity: 0, y: -10 }}
//                                                 animate={{ opacity: 1, y: 0 }}
//                                                 exit={{ opacity: 0, y: -10 }}
//                                                 transition={{ duration: 0.3 }}
//                                                 className="absolute text-sm left-0 w-48 bg-white shadow-lg  border border-gray-200 z-10 group-hover:block hidden"
//                                             >
//                                                 <ul className="space-y-2 p-2">
//                                                     {item.submenu.map((subitem) => (
//                                                         <li key={subitem.name}>
//                                                             <Link
//                                                                 href={subitem.href}
//                                                                 className="text-[#00634A] hover:text-[#588D7F] block px-3 py-2"
//                                                             >
//                                                                 {subitem.name}
//                                                             </Link>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </motion.div>
//                                         )}
//                                     </div>
//                                 ))}
//                                 <FaSearch className="text-[#00634A] hover:text-[#588D7F] cursor-pointer" />
//                                 <Link
//                                     href="/donate"
//                                     className="bg-[#00634A] text-white px-4 py-2  hover:bg-[#588D7F] transition duration-300"
//                                 >
//                                     Donate
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* Mobile Menu */}
//                         <motion.div
//                             initial={{ x: "-100%" }}
//                             animate={{
//                                 x: isMenuOpen ? "0%" : "-100%",
//                                 opacity: isMenuOpen ? 1 : 0,
//                             }}
//                             transition={{ duration: 0.5, ease: "easeInOut" }}
//                             className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-start p-6 space-y-4 md:hidden"
//                         >
//                             <div className="flex justify-between items-center w-full">
//                                 <h2 className="text-[#00634A] text-xl font-semibold">
//                                     Menu
//                                 </h2>
//                                 <button
//                                     onClick={() => setIsMenuOpen(false)}
//                                     className="text-[#00634A] hover:text-[#588D7F] text-2xl"
//                                 >
//                                     &times;
//                                 </button>
//                             </div>
//                             {menuData.map((item) => (
//                                 <div key={item.name} className="w-full">
//                                     <div
//                                         className="flex justify-between items-center w-full text-[#00634A] hover:text-[#588D7F] text-lg"
//                                         onClick={() => handleAccordionToggle(item.name)}
//                                     >
//                                         <Link
//                                             href={item.href}
//                                             onClick={handleMenuItemClick}
//                                         >
//                                             {item.name}
//                                         </Link>
//                                         {item.submenu && (
//                                             <span>
//                                                 {activeAccordion === item.name ? (
//                                                     <FaChevronUp />
//                                                 ) : (
//                                                     <FaChevronDown />
//                                                 )}
//                                             </span>
//                                         )}
//                                     </div>
//                                     {item.submenu &&
//                                         activeAccordion === item.name && (
//                                             <motion.div
//                                                 initial={{ opacity: 0, y: -10 }}
//                                                 animate={{ opacity: 1, y: 0 }}
//                                                 exit={{ opacity: 0, y: -10 }}
//                                                 transition={{ duration: 0.3 }}
//                                                 className="ml-4 space-y-2"
//                                             >
//                                                 {item.submenu.map((subitem) => (
//                                                     <Link
//                                                         key={subitem.name}
//                                                         href={subitem.href}
//                                                         className="text-[#00634A] hover:text-[#588D7F] block"
//                                                         onClick={handleMenuItemClick}
//                                                     >
//                                                         {subitem.name}
//                                                     </Link>
//                                                 ))}
//                                             </motion.div>
//                                         )}
//                                 </div>
//                             ))}
//                             <span
//                                 className="bg-[#00634A] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#588D7F]"
//                                 onClick={handleMenuItemClick}
//                             >
//                                 Donate
//                             </span>
//                         </motion.div>
//                     </nav>
//                 </div>
//             </section>
//         </header>
//     );
// };

// export default Header;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    FaInstagram,
    FaFacebook,
    FaSearch,
    FaBars,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import menuData from "@/data/menuData";
import contactDetails from '../../data/contactDetails';

const Header = () => {
    const { address, email, phone } = contactDetails;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionToggle = (itemName) => {
        if (activeAccordion === itemName) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(itemName);
        }
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <header>
            {/* Upper Header */}
            <section className="bg-[#E6F2EF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#E6F2EF] hidden md:flex items-center justify-between px-4 py-2 text-sm">
                        <div className="flex items-center space-x-3 text-[#00634A]">
                            <span>Call Us: {phone}</span>
                            <span className="border-l h-5 border-[#00634A] px-1">
                                {email}
                            </span>
                        </div>
                        <div className="flex space-x-2 items-end">
                            <Link href="https://www.instagram.com/birsamundamf/" target="_blank" passHref>
                                <FaInstagram className="hover:text-[#588D7F]" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" passHref>
                                <FaXTwitter className="hover:text-[#588D7F]" />
                            </Link>
                            <Link href="https://www.facebook.com/birsamf/" target="_blank" passHref>
                                <FaFacebook className="hover:text-[#588D7F]" />
                            </Link>
                            <Link href="https://www.linkedin.com" target="_blank" passHref>
                                <AiOutlineYoutube className="hover:text-[#588D7F]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navbar */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="">
                        <div className="container mx-auto flex items-center justify-between px-4 py-3">
                            {/* Hamburger Menu */}
                            <div
                                className="md:hidden flex items-center text-[#00634A] cursor-pointer"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <FaBars className="text-2xl hover:text-[#588D7F]" />
                            </div>

                            {/* Logo (Centered in mobile view) */}
                            <div className="flex items-center justify-center flex-shrink-0 w-full md:w-auto">
                                <Link href="/">
                                    <img
                                        src="/images/01.png"
                                        alt="logo"
                                        className="w-20 h-auto md:w-28"
                                    />
                                </Link>
                            </div>

                            {/* Navbar Links (Desktop Only) */}
                            <div className="hidden md:flex items-center space-x-6">
                                {menuData.map((item) => (
                                    <div key={item.name} className="relative group">
                                        <Link
                                            href={item.href}
                                            className="text-[#00634A] hover:text-[#588D7F] transition duration-300"
                                        >
                                            {item.name}
                                        </Link>
                                        {item.submenu && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute text-sm left-0 w-48 bg-white shadow-lg  border border-gray-200 z-10 group-hover:block hidden"
                                            >
                                                <ul className="space-y-2 p-2">
                                                    {item.submenu.map((subitem) => (
                                                        <li key={subitem.name}>
                                                            <Link
                                                                href={subitem.href}
                                                                className="text-[#00634A] hover:text-[#588D7F] block px-3 py-2"
                                                            >
                                                                {subitem.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                                <FaSearch className="text-[#00634A] hover:text-[#588D7F] cursor-pointer" />
                                <Link
                                    href="/donate"
                                    className="bg-[#00634A] text-white px-4 py-2  hover:bg-[#588D7F] transition duration-300"
                                >
                                    Donate
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: "100%" }} // Start from the right side
                            animate={{
                                x: isMenuOpen ? "0%" : "100%", // Slide in/out from right
                                opacity: isMenuOpen ? 1 : 0,
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="fixed top-0 right-0 w-full h-screen bg-white z-50 flex flex-col items-start p-6 space-y-4 md:hidden"
                        >
                            <div className="flex justify-between items-center w-full">
                                <h2 className="text-[#00634A] text-xl font-semibold">
                                    Menu
                                </h2>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-[#00634A] hover:text-[#588D7F] text-2xl"
                                >
                                    &times;
                                </button>
                            </div>
                            {menuData.map((item) => (
                                <div key={item.name} className="w-full">
                                    <div
                                        className="flex justify-between items-center w-full text-[#00634A] hover:text-[#588D7F] text-lg"
                                        onClick={() => handleAccordionToggle(item.name)}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={handleMenuItemClick}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.submenu && (
                                            <span>
                                                {activeAccordion === item.name ? (
                                                    <FaChevronUp />
                                                ) : (
                                                    <FaChevronDown />
                                                )}
                                            </span>
                                        )}
                                    </div>
                                    {item.submenu &&
                                        activeAccordion === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className="ml-4 space-y-2"
                                            >
                                                {item.submenu.map((subitem) => (
                                                    <Link
                                                        key={subitem.name}
                                                        href={subitem.href}
                                                        className="text-[#00634A] hover:text-[#588D7F] block"
                                                        onClick={handleMenuItemClick}
                                                    >
                                                        {subitem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                </div>
                            ))}
                            <Link
                                href="/donate"
                                className="bg-[#00634A] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#588D7F]"
                                onClick={handleMenuItemClick}
                            >
                                Donate
                            </Link>
                        </motion.div>
                    </nav>
                </div>
            </section>
        </header>
    );
};

export default Header;
