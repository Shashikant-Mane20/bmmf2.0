"use client"
// pages/volunteering-and-internships.js

export default function VolunteeringAndInternships() {
    return (
      <div className="py-16 px-4 bg-gray-100">
        {/* Heading */}
        <section className="max-w-7xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#00634A] mb-6">Volunteering & Internships</h1>
          <p className="text-lg text-gray-600">Join us in making a difference! Explore volunteering and internship opportunities at Birsa Munda Medical Foundation.</p>
        </section>
  
        {/* Volunteering Opportunities Section */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Volunteering Opportunities</h2>
          <p className="text-lg text-gray-700 mb-6">We offer a range of volunteer positions to contribute towards healthcare outreach and community welfare. Get involved in shaping a better future.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Volunteering Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Health Volunteer</h3>
              <p className="text-gray-700 mb-4">Assist in community health programs, awareness campaigns, and health screenings.</p>
              <button className="bg-[#00634A] text-white py-2 px-4 rounded-full text-lg hover:bg-[#588D7F] transition">Learn More</button>
            </div>
            {/* Add more volunteer roles as needed */}
          </div>
        </section>
  
        {/* Internship Opportunities Section */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Internship Opportunities</h2>
          <p className="text-lg text-gray-700 mb-6">Gain hands-on experience while contributing to meaningful work. Apply for internships that align with your career goals.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Internship Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Medical Intern</h3>
              <p className="text-gray-700 mb-4">Work with healthcare professionals in a medical setting, assisting with patient care and administrative tasks.</p>
              <button className="bg-[#00634A] text-white py-2 px-4 rounded-full text-lg hover:bg-[#588D7F] transition">Learn More</button>
            </div>
            {/* Add more internship roles as needed */}
          </div>
        </section>
  
        {/* Application Form Section */}
        <section className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Apply Now</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588D7F]"
                required
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588D7F]"
                required
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="resume" className="block text-gray-700 font-semibold mb-2">Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588D7F]"
                required
              />
            </div>
  
            <button type="submit" className="w-full bg-[#00634A] text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-[#588D7F] transition">Submit Application</button>
          </form>
        </section>
      </div>
    );
  }
  
