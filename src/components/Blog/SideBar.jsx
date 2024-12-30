// components/Sidebar.js
import Link from 'next/link';

const Sidebar = ({ blogs }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-darkgreen mb-4">Recent Blogs</h3>
        <ul>
          {blogs.slice(0, 3).map((blog) => (
            <li key={blog.id} className="mb-2">
              <Link href={`/blog/${blog.id}`} className="text-darkgreen hover:text-lightgreen">
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-darkgreen mb-4">Categories</h3>
        <ul>
          <li className="mb-2">
            <Link href="/category/water" className="text-darkgreen hover:text-lightgreen">Water</Link>
          </li>
          <li className="mb-2">
            <Link href="/category/education" className="text-darkgreen hover:text-lightgreen">Education</Link>
          </li>
          <li className="mb-2">
            <Link href="/category/agriculture" className="text-darkgreen hover:text-lightgreen">Agriculture</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
