// pages/blog/index.js
import { blogs } from '../../data/Blog';  // Importing blog data
import Sidebar from './Sidebar';
import BlogCard from './BlogCard';

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Blog Post List */}
        <div className="md:col-span-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Sidebar (Recent blogs and Categories) */}
        <Sidebar blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogPage;
