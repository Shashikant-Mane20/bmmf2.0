// pages/our-team.js

import Image from 'next/image'

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: "/images/user.jpg", // Update with your image paths
    description: "John is the visionary leader behind the company. He brings years of experience in business development and strategy."
  },
  {
    name: "Jane Smith",
    position: "Lead Developer",
    image: "/images/user.jpg", // Update with your image paths
    description: "Jane is the backbone of our technical team, with a deep understanding of coding and software architecture."
  },
  {
    name: "Robert Brown",
    position: "Marketing Head",
    image: "/images/user.jpg", // Update with your image paths
    description: "Robert drives our marketing efforts, building brands and campaigns that resonate with customers."
  },
  // Add more team members as needed
];

export default function OurTeam() {
  return (
    <div>
      {/* Introductory Section */}
      <section className="bg-[#00634A] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Meet the People Behind Our Success</h1>
          <p className="text-xl mb-6">Our team is made up of passionate individuals who bring diverse skills and expertise to the table. Together, we strive for excellence and deliver impactful results for our clients.</p>
        </div>
      </section>

      {/* Team Overview Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Talented Team</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex justify-center mb-4">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={150} 
                  height={150} 
                  className="rounded-full border-4 border-gray-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
              <p className="text-sm text-center text-gray-500 mb-4">{member.position}</p>
              <p className="text-gray-700 text-base">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#00634A] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch with Us</h2>
          <p className="text-xl mb-8">Have any questions or want to know more about our team? Feel free to reach out!</p>
          <a href="mailto:contact@example.com" className="bg-white text-[#00634A] py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
