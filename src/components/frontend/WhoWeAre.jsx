// "use client";

// import React from "react";
// import { motion } from "framer-motion"; // Import Framer Motion for animations

// const WhoWeAre = () => {
//   return (
    
// <section className="">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <section className="bg-white py-16 px-8"> {/* Changed the background to white */}
//       {/* Section Title */}
//       <div className="text-center mb-12">
//         <motion.h2
//           className="text-3xl md:text-5xl font-bold text-[#588D7F] mb-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Who We Are
//         </motion.h2>
//         <motion.p
//           className="text-lg md:text-xl text-gray-700"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           Organization set up to provide help and raise money for those in need.
//         </motion.p>
//       </div>

//       {/* Content Grid */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {/* Image Card 1 */}
//         <motion.div
//           className="flex flex-col"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="w-full h-[300px]">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1663089870095-c231a534ac31?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Helping Hands"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-[#588D7F] mt-4">Helping Hands</h3>
//           <p className="text-gray-600 mt-2">
//             Providing essential support to communities in need, ensuring brighter futures.
//           </p>
//         </motion.div>

//         {/* Image Card 2 */}
//         <motion.div
//           className="flex flex-col"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true }}
//         >
//           <div className="w-full h-[300px]">
//             <img
//               src="https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Community Support"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-[#00634A] mt-4">Community Support</h3>
//           <p className="text-gray-600 mt-2">
//             Empowering communities through education, resources, and healthcare.
//           </p>
//         </motion.div>

//         {/* Image Card 3 */}
//         <motion.div
//           className="flex flex-col"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <div className="w-full h-[300px]">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1681825054807-2e7bb610a6e7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Dedicated Volunteers"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-[#588D7F] mt-4">Dedicated Volunteers</h3>
//           <p className="text-gray-600 mt-2">
//             A passionate team committed to making a difference in people's lives.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//     </div>
//           </section>
//   );
// };

// export default WhoWeAre;

"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import whoWeAreData from "../../data/whoWeAreSection"; // Import JSON data

const WhoWeAre = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white py-16 px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-[#588D7F] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Who We Are
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Organization set up to provide help and raise money for those in need.
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {whoWeAreData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-[300px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3
                  className="text-xl font-semibold mt-4"
                  style={{ color: item.textColor }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhoWeAre;
