"use client"
import React from "react";
import { motion } from "framer-motion";

const Events = () => {
  const events = [
    {
      id: 1,
      image: "/images/530x530.jpg",
      category: "Education",
      name: "Help Underprivileged Children",
      description: "Support our initiative to educate underprivileged children.",
      amountRaised: "₹50,000",
      goal: "₹1,00,000",
    },
    {
      id: 2,
      image: "/images/580x580.jpg",
      category: "Health",
      name: "Medical Aid for Villages",
      description: "Provide medical aid to remote villages in need.",
      amountRaised: "₹30,000",
      goal: "₹70,000",
    },
    {
      id: 3,
      image: "/images/580x580.jpg",
      category: "Environment",
      name: "Tree Plantation Drive",
      description: "Join us in planting trees for a greener tomorrow.",
      amountRaised: "₹10,000",
      goal: "₹50,000",
    },
    {
      id: 4,
      image: "/images/580x580.jpg",
      category: "Animal Welfare",
      name: "Save the Strays",
      description: "Help provide shelter to stray animals.",
      amountRaised: "₹25,000",
      goal: "₹60,000",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-10"
      >
        Our Events
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={event.image}
                alt={event.name || "Event Image"}
                className="w-full h-64 object-cover"
              />
              {/* Hover Donate Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Donate Now
              </motion.button>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                {event.category || "Unknown Category"}
              </p>
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                {event.name || "Untitled Event"}
              </h3>
              <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                {event.description || "No description available."}
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-800">
                  <span className="text-green-600">Raised:</span>{" "}
                  {event.amountRaised || "N/A"}
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  <span className="text-blue-600">Goal:</span>{" "}
                  {event.goal || "N/A"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
