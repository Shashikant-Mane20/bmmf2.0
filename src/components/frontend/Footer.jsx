// "use client";

// import React from "react";
// import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
// import { motion } from "framer-motion"; // Import Framer Motion for animations

// const Footer = () => {
//   return (
//     <footer className="bg-[#00634A] text-white py-10">
//       <div className="container mx-auto px-4">
//         {/* Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About Us Section */}
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-[#A8E06B] font-bold text-lg mb-4">About Us</h3>
//             <p className="text-sm mb-4">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste facilis magni fuga tenetur alias quis nemo in velit voluptate optio minima perspiciatis a, impedit culpa sunt omnis corporis molestiae ducimus?
//             </p>
//             <p className="text-sm">Call us: +91 7276162374</p>
//             <p className="text-sm">Plot No.112, 112, Kishor Suryawanshi Marg, Road, Omkar Nagar, Nashik, Maharashtra 422004</p>
//           </motion.div>

//           {/* Latest Posts Section */}
//           <motion.div
//             className="space-y-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <h3 className="text-[#A8E06B] font-bold text-lg mb-4">Latest Posts</h3>
//             <ul className="text-sm space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#A8E06B] transition duration-300"
//                 >
//                   Care for All People <span className="text-xs block">April 19, 2017</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#A8E06B] transition duration-300"
//                 >
//                   Find a Project <span className="text-xs block">March 28, 2017</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#A8E06B] transition duration-300"
//                 >
//                   Being Volunteer <span className="text-xs block">March 28, 2017</span>
//                 </a>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Links Section */}
//           <motion.div
//             className="space-y-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-[#A8E06B] font-bold text-lg mb-4">Links</h3>
//             <ul className="text-sm space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#A8E06B] transition duration-300"
//                 >
//                   Partners
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#A8E06B] transition duration-300"
//                 >
//                   Recent Causes
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#A8E06B] transition duration-300"
//                 >
//                   Latest Events
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#A8E06B] transition duration-300"
//                 >
//                   News
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-[#A8E06B] transition duration-300"
//                 >
//                   Who We Are?
//                 </a>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Map Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <h3 className="text-[#A8E06B] font-bold text-lg mb-4">Location</h3>
//             <iframe
//               className="w-full h-40 md:h-32"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4135.394562566578!2d73.7944500711296!3d20.045581520751032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb4111082a17%3A0x3702085e303430a5!2sBirsa%20Munda%20Medical%20Hub%20-%20Best%20Multispecialty%20Hospital%20In%20Nashik%20%7C%20Best%20Low%20Cost%20Hospital%20in%20Nashik!5e1!3m2!1sen!2sus!4v1732705593839!5m2!1sen!2sus"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <motion.div
//           className="border-t border-[#A8E06B] my-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         ></motion.div>

//         {/* Social Media & Copyright */}
//         <motion.div
//           className="flex flex-col md:flex-row justify-between items-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <div className="flex space-x-4 mb-4 md:mb-0">
//             <FaInstagram className="text-xl hover:text-[#A8E06B] cursor-pointer" />
//             <FaXTwitter className="text-xl hover:text-[#A8E06B] cursor-pointer" />
//             <FaFacebook className="text-xl hover:text-[#A8E06B] cursor-pointer" />
//             <FaLinkedin className="text-xl hover:text-[#A8E06B] cursor-pointer" />
//           </div>
//           <p className="text-sm text-[#A8E06B]">
//             &copy; {new Date().getFullYear()} All rights reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Footer = () => {
  return (
    <footer className="bg-[#e6f2ef] text-[#333] py-10">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#00634A] font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste facilis magni fuga tenetur alias quis nemo in velit voluptate optio minima perspiciatis a, impedit culpa sunt omnis corporis molestiae ducimus?
            </p>
            <p className="text-sm">Call us: +91 7276162374</p>
            <p className="text-sm">Plot No.112, 112, Kishor Suryawanshi Marg, Road, Omkar Nagar, Nashik, Maharashtra 422004</p>
          </motion.div>

          {/* Latest Posts Section */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[#00634A] font-bold text-lg mb-4">Latest Posts</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#00634A] transition duration-300"
                >
                  Care for All People <span className="text-xs block">April 19, 2017</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#00634A] transition duration-300"
                >
                  Find a Project <span className="text-xs block">March 28, 2017</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#00634A] transition duration-300"
                >
                  Being Volunteer <span className="text-xs block">March 28, 2017</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[#00634A] font-bold text-lg mb-4">Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#00634A] transition duration-300"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#00634A] transition duration-300"
                >
                  Recent Causes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#00634A] transition duration-300"
                >
                  Latest Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#00634A] transition duration-300"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#00634A] transition duration-300"
                >
                  Who We Are?
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[#00634A] font-bold text-lg mb-4">Location</h3>
            <iframe
              className="w-full h-40 md:h-32"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4135.394562566578!2d73.7944500711296!3d20.045581520751032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb4111082a17%3A0x3702085e303430a5!2sBirsa%20Munda%20Medical%20Hub%20-%20Best%20Multispecialty%20Hospital%20In%20Nashik%20%7C%20Best%20Low%20Cost%20Hospital%20in%20Nashik!5e1!3m2!1sen!2sus!4v1732705593839!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-[#00634A] my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        ></motion.div>

        {/* Social Media & Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            <FaInstagram className="text-xl hover:text-[#00634A] cursor-pointer" />
            <FaXTwitter className="text-xl hover:text-[#00634A] cursor-pointer" />
            <FaFacebook className="text-xl hover:text-[#00634A] cursor-pointer" />
            <FaLinkedin className="text-xl hover:text-[#00634A] cursor-pointer" />
          </div>
          <p className="text-sm text-[#00634A]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


