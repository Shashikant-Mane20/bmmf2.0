// components/BlogCard.js
// import Link from "next/link";

// const BlogCard = ({ blog }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//       <img
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-64 object-cover rounded-md"
//       />
//       <Link href={`/blog/${blog.id}`}>
//         <h2 className="text-xl font-semibold text-darkgreen hover:text-lightgreen mt-4">
//           {blog.title}
//         </h2>
//       </Link>
//       <p className="text-sm text-gray-600">
//         {blog.date} by {blog.author}
//       </p>
//       <p className="mt-2 text-gray-800">{blog.content.slice(0, 150)}...</p>{" "}
//       {/* Displaying first 150 chars as excerpt */}
//     </div>
//   );
// };

// export default BlogCard;

// export default function BlogCard() {
//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
//       <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
//         <a href="#">
//           <img
//             className="w-full max-h-60"
//             src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg"
//             alt="Sunset in the mountains"
//           />
//         </a>
//         <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
//           <a
//             href="#"
//             className="font-semibold text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out mb-2"
//           >
//             The Best Activewear from the Nordstrom Anniversary Sale
//           </a>
//           <p className="text-gray-500 text-sm">
//             Today, I’m covering one of my favorite parts of the Nordstrom
//             Anniversary Sale: the activewear!
//           </p>
//           <p className="mt-5 text-gray-600 text-xs">
//             By{" "}
//             <a
//               href="#"
//               className="text-xs text-green-600 transition duration-500 ease-in-out"
//             >
//               Mehdi Ahmadi
//             </a>{" "}
//             | in{" "}
//             <a
//               href="#"
//               className="text-xs text-green-600 transition duration-500 ease-in-out"
//             >
//               Cooking
//             </a>
//             ,{" "}
//             <a
//               href="#"
//               className="text-xs text-green-600 transition duration-500 ease-in-out"
//             >
//               Recipe
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

export default function BlogPost() {
  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
      <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto relative">
        <Link
          href="/single-blog"
          className="text-xl sm:text-4xl font-semibold inline-block hover:text-[#00634A] transition duration-500 ease-in-out mb-2"
        >
          The Best Activewear from the Nordstrom Anniversary Sale
        </Link>

        <div className="relative">
          <Link href="/single-blog">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
              alt="Sunset in the mountains"
            />
          </Link>

          {/* Date Block Positioned Half on Image and Half on Text */}
          <div className="absolute bottom-0 left-2 rounded-lg flex items-center bg-[#00634A] text-white px-4 py-2 text-xs sm:text-sm z-10 transform translate-y-1/2 sm:translate-y-1/3">
            <span className="mx-2 text-4xl">30</span>
            <br />
            <span>Jan</span>
          </div>
        </div>

        <p className="text-gray-700 py-5 text-base leading-8">
          Machu Picchu is a 15th-century Inca citadel situated on a mountain
          ridge 2,430 metres (7,970 ft) above sea level. It is located in the
          Cusco Region, Urubamba Province, Machupicchu District in Peru, above
          the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco
          and through which the Urubamba River flows.
        </p>

        <div className="py-5 text-sm font-regular text-gray-900 flex">
          {/* Time Icon */}
          <span className="mr-3 flex flex-row items-center">
            <BiTime className="text-[#00634A]" size={16} />
            <span className="ml-1">6 mins ago</span>
          </span>

          {/* User Icon */}
          <a
            href="#"
            className="flex flex-row items-center hover:text-[#00634A]"
          >
            <FaUserAlt className="text-[#00634A]" size={14} />
            <span className="ml-1">AliSher Azimi</span>
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
}
