// "use client";

// import React from "react";
// import { FaBook, FaHeartbeat, FaHandsHelping } from "react-icons/fa"; // Importing React Icons
// import { motion } from "framer-motion"; // Importing Framer Motion for animations

// const DonateSection = () => {
//     const cards = [
//         {
//             image: "/images/causes/c1.jpeg",
//             title: "Support Education",
//             icon: <FaBook className="text-4xl text-[#FF6347]" />, // Colorful icon for Education
//         },
//         {
//             image: "/images/causes/c2.jpeg",
//             title: "Feed the Hungry",
//             icon: <FaHeartbeat className="text-4xl text-[#FF4500]" />, // Colorful icon for Feed the Hungry
//         },
//         {
//             image: "/images/causes/c3.jpeg",
//             title: "Care for Animals",
//             icon: <FaHandsHelping className="text-4xl text-[#32CD32]" />, // Colorful icon for Animal Care
//         },
//     ];

//     return (
//         <section>
//              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white py-16"> {/* Changed the background to white */}
//             <div className="container mx-auto px-4">
//                 <h2 className="text-4xl font-bold text-center text-[#2c6e49] mb-12">
//                     Make a Difference, Donate Today
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                     {cards.map((card, index) => (
//                         <motion.div
//                             key={index}
//                             className="relative group bg-white overflow-hidden shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
//                             initial={{ opacity: 0, y: 50 }} // Initial state: invisible and moved down
//                             whileInView={{ opacity: 1, y: 0 }} // When in view: fully visible and reset vertical position
//                             viewport={{ once: true, amount: 0.3 }} // Triggers animation once the element is 30% visible
//                             transition={{ duration: 0.5, ease: "easeInOut" }} // Animation timing
//                         >
//                             {/* Image */}
//                             <div className="overflow-hidden rounded-t-lg">
//                                 <img
//                                     src={card.image}
//                                     alt={card.title}
//                                     className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-300"
//                                 />
//                             </div>
//                             {/* Content */}
//                             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-left">
//                                 <div className="flex items-center space-x-4 mb-4">
//                                     {/* Colorful icon for each card */}
//                                     <div className="bg-white p-2 rounded-full shadow-lg">
//                                         {card.icon}
//                                     </div>
//                                     <h3 className="text-xl font-semibold text-white">{card.title}</h3>
//                                 </div>
//                                 <button className="bg-[#A8E06B] text-white py-2 px-6 rounded-md hover:bg-[#81C14B] transition-colors duration-300">
//                                     Donate
//                                 </button>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//         </div>
//       </section>
//     );
// };

// export default DonateSection;


"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaHeartbeat, FaHandsHelping } from "react-icons/fa"; // Importing necessary icons
import donateCards from "../../data/donateSection";

const iconMap = {
    FaBook: FaBook,
    FaHeartbeat: FaHeartbeat,
    FaHandsHelping: FaHandsHelping,
};

const DonateSection = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-[#2c6e49] mb-12">
                            Make a Difference, Donate Today
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {donateCards.map((card, index) => {
                                const IconComponent = iconMap[card.icon];
                                return (
                                    <motion.div
                                        key={index}
                                        className="relative group bg-white overflow-hidden shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        {/* Image */}
                                        <div className="overflow-hidden rounded-t-lg">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-left">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <div className="bg-white p-2 rounded-full shadow-lg">
                                                    {IconComponent && (
                                                        <IconComponent
                                                            className="text-4xl"
                                                            style={{ color: card.color }}
                                                        />
                                                    )}
                                                </div>
                                                <h3 className="text-xl font-semibold text-white">
                                                    {card.title}
                                                </h3>
                                            </div>
                                            <button className="bg-[#A8E06B] text-white py-2 px-6 rounded-md hover:bg-[#81C14B] transition-colors duration-300">
                                                Donate
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonateSection;
