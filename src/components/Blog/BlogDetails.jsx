"use client";
import React, { useState } from "react";
import Sidebar from "./SideBar";

const blog = {
  title: "Breaking the Silence: Mental Health Matters",
  author: "John Doe",
  date: "Dec 30, 2024",
  images: ["/images/blog/2.jpeg", "/images/blog/3.jpeg","https://plus.unsplash.com/premium_photo-1683121608450-08d5ee613dd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  content: `
    In many communities, mental health issues are often misunderstood or ignored, leaving individuals to suffer in silence. At our health NGO, we have launched initiatives to raise awareness about the importance of mental well-being. Through counseling sessions, workshops, and helplines, we’re making mental health resources accessible to those in need. Our goal is to destigmatize conversations around mental health and provide support for individuals battling anxiety, depression, and other challenges. Together, we can build a future where mental health is prioritized just as much as physical health.
  `,
};

const BlogDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        {/* Main Blog Content Section */}
        <div className="w-full lg:w-2/3 mb-6">
          {/* Header Image with Title */}
          <div className="relative w-full h-80 mb-6">
            <img
              src="/images/blog/1.jpeg" // Add your desired header image path here
              alt="Blog Header"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h1 className="text-4xl font-bold">{blog.title}</h1>
            </div>
          </div>

          {/* Blog Content */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mt-2">
              By {blog.author} | {blog.date}
            </p>
          </div>

          {/* Blog Body */}
          <div className="mb-6">
            {/* <h2 className="text-2xl font-semibold mb-4">Blog</h2> */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {blog.images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="relative w-full max-w-4xl p-4 bg-white rounded-lg">
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full z-50"
                  onClick={closeModal}
                >
                  ✕
                </button>

                {/* Active Image */}
                <img
                  src={blog.images[activeIndex]}
                  alt={`Gallery image ${activeIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Section */}
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogDetails;
