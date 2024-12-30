// pages/about.js

export default function AboutUs() {
  return (
    <div className="py-16 px-4 bg-gray-100">
      {/* Heading Section */}
      <section className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600">We are committed to improving healthcare for underserved communities. Learn more about our mission, values, and the team behind our work.</p>
      </section>

      {/* Our Mission Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to provide accessible healthcare to the most vulnerable populations by partnering with local communities, organizations, and healthcare professionals to deliver essential services and resources.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We believe in a future where everyone has access to quality medical care, regardless of their background or location. Through education, awareness programs, and direct medical intervention, we strive to make healthcare a fundamental right for all.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Compassion</h3>
            <p className="text-gray-700">
              We approach every individual with empathy and kindness, ensuring that every person receives the respect and care they deserve.
            </p>
          </div>

          {/* Value Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>
            <p className="text-gray-700">
              We uphold the highest standards of honesty and ethical behavior in everything we do, building trust with our partners and communities.
            </p>
          </div>

          {/* Value Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collaboration</h3>
            <p className="text-gray-700">
              We believe that working together with local communities, organizations, and healthcare providers is essential for achieving lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h2>
        <p className="text-lg text-gray-700 mb-6">Meet the passionate individuals who lead our organization and drive our mission forward.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/user.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">John Doe</h3>
            <p className="text-gray-700">Founder & Executive Director</p>
            <p className="text-gray-700 mt-4">
              John is the visionary behind our mission, with over 15 years of experience in the healthcare sector. His leadership drives our goals and the success of our initiatives.
            </p>
          </div>

          {/* Team Member Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/user.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Jane Smith</h3>
            <p className="text-gray-700">Medical Director</p>
            <p className="text-gray-700 mt-4">
              Jane leads our medical team with a wealth of experience in clinical care and program management. She ensures that our services are of the highest quality.
            </p>
          </div>

          {/* Team Member Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/user.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Michael Brown</h3>
            <p className="text-gray-700">Operations Manager</p>
            <p className="text-gray-700 mt-4">
              Michael manages the day-to-day operations of our programs, ensuring smooth implementation and efficient use of resources across various initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">If you have any questions or would like to learn more about our work, feel free to reach out to us.</p>
        <a href="mailto:contact@bmmf.org" className="bg-[#00634A] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#588D7F] transition">Contact Us</a>
      </section>
    </div>
  );
}