const Sidebar = () => {
  const recentPosts = [
    {
      title: "The Advantages of Organic Farming",
      date: "Dec 25, 2024",
      image: "/images/800x600.jpg",
    },
    {
      title: "5 Simple Ways to Eat Healthier",
      date: "Dec 22, 2024",
      image: "/images/800x600.jpg",
    },
    {
      title: "The Rise of Sustainable Energy Solutions",
      date: "Dec 15, 2024",
      image: "/images/800x600.jpg",
    },
  ];

  return (
    <div className="w-full lg:w-1/3 space-y-6">
      {/* Search Card */}
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold mb-4">Search</h3>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588D7F]"
        />
      </div>

      {/* Recent Posts Card */}
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map((post, index) => (
            <li key={index} className="flex space-x-4">
              <img
                src={post.image}
                alt={`Recent post ${index + 1}`}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-700">{post.title}</h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories Card */}
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          <li className="text-sm text-gray-700 hover:underline cursor-pointer">Health</li>
          <li className="text-sm text-gray-700 hover:underline cursor-pointer">Sustainability</li>
          <li className="text-sm text-gray-700 hover:underline cursor-pointer">Lifestyle</li>
        </ul>
      </div>

      {/* Newsletter Card */}
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">
          Subscribe to our newsletter to receive updates!
        </p>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        />
        <button className="w-full bg-[#588D7F] text-white p-2 rounded-md hover:bg-[#588D7F]">
          Subscribe
        </button>
      </div>

      {/* Tags Card */}
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Healthcare",
            "Medical Assistance",
            "NGO Support",
            "Community Health",
            "Medical Awareness",
            "Social Impact",].map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-[#588D7F] text-sm px-2 py-1 rounded-md cursor-pointer hover:bg-green-200"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
