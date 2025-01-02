// import Image from "next/image";
// import contactDetails from '../../../data/contactDetails';

// export default function ContactUs() {
//   const { address, email, phone } = contactDetails;

//   return (
//     <form action="https://fabform.io/f/{form-id}" method="post">
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row gap-8">
//           {/* Left Section: Map and Contact Details */}
//           <div className="lg:w-2/3 w-full bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="relative w-full h-80">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 className="absolute inset-0"
//                 title="map"
//                 scrolling="no"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4135.394562566578!2d73.7944500711296!3d20.045581520751032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb4111082a17%3A0x3702085e303430a5!2sBirsa%20Munda%20Medical%20Hub%20-%20Best%20Multispecialty%20Hospital%20In%20Nashik%20%7C%20Best%20Low%20Cost%20Hospital%20in%20Nashik!5e1!3m2!1sen!2sus!4v1732705593839!5m2!1sen!2sus"
//                 style={{ filter: "grayscale(1) contrast(1.2)" }}
//               ></iframe>
//             </div>
//             <div className="bg-white p-6 sm:p-8 rounded-b-lg flex flex-wrap">
//               <div className="w-full lg:w-1/2 px-6">
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs uppercase">
//                   ADDRESS
//                 </h2>
//                 <p className="mt-1 text-sm text-gray-600">{address}</p>
//               </div>
//               <div className="w-full lg:w-1/2 px-6 mt-4 lg:mt-0">
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs uppercase">
//                   EMAIL
//                 </h2>
//                 <a href={`mailto:${email}`} className="text-[#00634A] text-sm">
//                   {email}
//                 </a>
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 uppercase">
//                   PHONE
//                 </h2>
//                 <p className="text-sm text-gray-600">{phone}</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section: Contact Form */}
//           <div className="lg:w-1/3 w-full bg-white rounded-lg shadow-lg p-8 flex flex-col">
//             <h2 className="text-gray-900 text-2xl font-medium title-font mb-4">Contact Us</h2>
//             <div className="relative mb-4">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-[#00634A] focus:ring-2 focus:ring-[#00634A] text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-[#00634A] focus:ring-2 focus:ring-[#00634A] text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label htmlFor="message" className="leading-7 text-sm text-gray-600">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-[#00634A] focus:ring-2 focus:ring-[#00634A] h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               ></textarea>
//             </div>
//             <button className="text-white bg-[#00634A] border-0 py-2 px-6 focus:outline-none hover:bg-[#004d3b] rounded text-lg">
//               Submit
//             </button>
//           </div>
//         </div>
//       </section>
//     </form>
//   );
// }



"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
        >
          Submit
        </button>
        <p className="text-sm text-gray-500">{status}</p>
      </form>
    </div>
  );
}
