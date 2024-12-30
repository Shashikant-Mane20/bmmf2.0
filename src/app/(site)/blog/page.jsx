import BlogSection from "@/components/Blog/BlogSection";

export default function Blog() {
  return (
    <main>
      <BlogSection />
    </main>
  );
}



// import Sidebar from '../components/Sidebar';

// export default function Blog() {
//   return (
//     <div className="max-w-7xl mx-auto py-16 px-4">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         {/* Main Blog Content */}
//         <div className="lg:col-span-2">
//           <h1 className="text-4xl font-bold text-gray-800 mb-6">Blog Posts</h1>
//           <div className="space-y-8">
//             {/* Sample Blog Post 1 */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-semibold text-gray-800 mb-4">How to Start a Blog</h2>
//               <p className="text-gray-700 mb-4">
//                 Starting a blog can be a great way to share your thoughts and experiences with the world. In this post, we will cover the basics of how to create a successful blog.
//               </p>
//               <Link href="/post/1">
//                 <span className="text-[#588D7F]">Read more</span>
//               </Link>
//             </div>

//             {/* Sample Blog Post 2 */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-semibold text-gray-800 mb-4">5 Tips for Writing Effective Posts</h2>
//               <p className="text-gray-700 mb-4">
//                 Writing a blog post can be challenging, but with a few tips, you can make your content stand out. In this article, we share five key strategies for writing effective blog posts.
//               </p>
//               <Link href="/post/2">
//                 <span className="text-[#588D7F]">Read more</span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar Section */}
//         <div className="lg:col-span-1">
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// }
