// pages/corporate-partners.js

export default function CorporatePartners() {
    return (
      <div className="py-16 px-4 bg-gray-100">
        {/* Heading Section */}
        <section className="max-w-7xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#00634A] mb-6">Our Corporate Partners</h1>
          <p className="text-lg text-gray-600">Together, we are making a meaningful impact in the healthcare sector. Learn more about our valued corporate partners who are helping us achieve our mission.</p>
        </section>
  
        {/* Partners Section */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Valued Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Partner Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/400x480.jpg" alt="Partner 1" className="w-32 h-32 mx-auto mb-4 object-contain" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Partner 1</h3>
              <p className="text-gray-700 mb-4">Partner 1 has been instrumental in supporting our healthcare outreach programs, providing necessary resources and funding to ensure the success of our initiatives.</p>
            </div>
  
            {/* Partner Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/400x480.jpg" alt="Partner 2" className="w-32 h-32 mx-auto mb-4 object-contain" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Partner 2</h3>
              <p className="text-gray-700 mb-4">Partner 2 has collaborated with us on numerous projects, bringing their expertise and technological solutions to improve our healthcare services.</p>
            </div>
  
            {/* Partner Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/400x480.jpg" alt="Partner 3" className="w-32 h-32 mx-auto mb-4 object-contain" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Partner 3</h3>
              <p className="text-gray-700 mb-4">Partner 3 plays a vital role in our medical research and development efforts, helping us stay ahead with cutting-edge medical technologies.</p>
            </div>
  
            {/* Add more partners as needed */}
          </div>
        </section>
  
        {/* Partnership Opportunities Section */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Become a Corporate Partner</h2>
          <p className="text-lg text-gray-700 mb-6">We are always looking for like-minded corporate partners to join us in our mission to improve healthcare for underserved communities. If you're interested in collaborating with us, please get in touch.</p>
          <a href="mailto:partnerships@bmmf.org" className="bg-[#00634A] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#588D7F] transition">Contact Us</a>
        </section>
      </div>
    );
  }
  