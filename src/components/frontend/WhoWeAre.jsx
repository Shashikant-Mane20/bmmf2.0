// "use client";

// import React from "react";
// import { motion } from "framer-motion"; // Import Framer Motion for animations

// const WhoWeAre = () => {
//   return (
//     <section className="bg-[#e6f2ef] py-16 px-8">
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
//               src="/images/320x240.jpg"
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
//               src="/images/320x240.jpg"
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
//               src="/images/320x240.jpg"
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
//   );
// };

// export default WhoWeAre;

"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-8"> {/* Changed the background to white */}
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
        {/* Image Card 1 */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-[300px]">
            <img
              src="/images/320x240.jpg"
              alt="Helping Hands"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#588D7F] mt-4">Helping Hands</h3>
          <p className="text-gray-600 mt-2">
            Providing essential support to communities in need, ensuring brighter futures.
          </p>
        </motion.div>

        {/* Image Card 2 */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-[300px]">
            <img
              src="/images/320x240.jpg"
              alt="Community Support"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#00634A] mt-4">Community Support</h3>
          <p className="text-gray-600 mt-2">
            Empowering communities through education, resources, and healthcare.
          </p>
        </motion.div>

        {/* Image Card 3 */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-[300px]">
            <img
              src="/images/320x240.jpg"
              alt="Dedicated Volunteers"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#588D7F] mt-4">Dedicated Volunteers</h3>
          <p className="text-gray-600 mt-2">
            A passionate team committed to making a difference in people's lives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
