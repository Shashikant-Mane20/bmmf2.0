import React from "react";
// import Sidebar from "./SideBar";
import Link from "next/link";
import Sidebar from "./SideBar";

const blogs = [
  {
    id: 1,
    title: "Breaking the Silence: Mental Health Matters",
    description: "Promoting mental health awareness and accessibility to resources in underserved communities through education and support programs.",
    author: "John Doe",
    date: "Dec 30, 2024",
    image: "/images/blog/1.jpeg",
  },
  // {
  //   id: 2,
  //   title: "Clean Water, Healthy Lives: Our Efforts in Rural Communities",
  //   description: "Creating sustainable access to safe drinking water and improving hygiene in rural communities to reduce disease and enhance overall well-being.",
  //   author: "Jane Smith",
  //   date: "Dec 29, 2024",
  //   image: "/images/1920x400.jpg",
  // },
];

const BlogSection = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap p-4 space-x-4">
      {/* Main Blog Section */}
      <div className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <Link href="/single-blog">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 bg-black bg-opacity-60 text-white text-sm p-2">
                {blog.date} | {blog.author}
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{blog.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Section */}
        <Sidebar />
    </div>
  );
};

export default BlogSection;
