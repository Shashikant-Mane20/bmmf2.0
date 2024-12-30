"use client"
// pages/careers.js

import { useState } from 'react';

const jobOpenings = [
  {
    title: "Medical Officer",
    location: "Ranchi, Jharkhand",
    description: "We are looking for a dedicated Medical Officer to join our team at Birsa Munda Medical Hub. The ideal candidate will be responsible for diagnosing and treating patients, offering consultations, and overseeing medical practices.",
    requirements: [
      "MBBS with at least 2 years of experience in a clinical setting",
      "Strong understanding of medical protocols and patient care",
      "Ability to work under pressure in a fast-paced environment",
      "Excellent communication and interpersonal skills"
    ],
  },
  {
    title: "Nurse",
    location: "Ranchi, Jharkhand",
    description: "Join our team as a Nurse and make a meaningful impact on the lives of those in need. You will be responsible for providing compassionate care to patients and assisting the medical team in various treatments.",
    requirements: [
      "Diploma in Nursing or equivalent qualification",
      "Registered Nurse with at least 1 year of experience",
      "Empathetic and patient-focused attitude",
      "Willingness to work in a collaborative environment"
    ],
  },
  {
    title: "Community Outreach Coordinator",
    location: "Ranchi, Jharkhand",
    description: "We are seeking a passionate individual for the role of Community Outreach Coordinator to help expand our reach and build relationships within local communities. The role involves organizing awareness programs and medical camps.",
    requirements: [
      "Bachelor’s degree in Social Work, Public Health, or related field",
      "Experience in organizing community outreach programs",
      "Excellent organizational and communication skills",
      "Ability to engage with diverse communities"
    ],
  },
];

export default function Careers() {
  const [formData, setFormData] = useState({ name: '', email: '', resume: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending an email or saving the application
    console.log(formData);
  };

  return (
    <div className="py-16 px-4 bg-gray-100">
      {/* Job Openings Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center text-[#00634A] mb-8">Career Opportunities at Birsa Munda Medical Foundation</h1>
        <p className="text-xl text-center mb-8">At Birsa Munda Medical Foundation, we are committed to providing quality healthcare to underserved communities. Join us in making a difference by applying to one of our open positions below.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{job.title}</h2>
              <p className="text-gray-500 mb-4">{job.location}</p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <h3 className="font-semibold text-gray-800 mb-2">Requirements:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Apply for a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00634A]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00634A]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="resume" className="block text-gray-700 font-semibold mb-2">Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00634A]"
              required
            />
          </div>

          <button type="submit" className="w-full bg-[#00634A] text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition">Submit Application</button>
        </form>
      </section>
    </div>
  );
}
