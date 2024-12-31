// // pages/corporate-partners.js

// import InfiniteScroll from "@/components/frontend/InfiniteScroll";

// export default function CorporatePartners() {
//     return (

      
//       <div className="py-16 px-4 bg-gray-100">

//         {/* Heading Section */}
//         <section className="max-w-7xl mx-auto mb-12 text-center">
//           <h1 className="text-4xl font-bold text-[#00634A] mb-6">Our Corporate Partners</h1>
//           <p className="text-lg text-gray-600">Together, we are making a meaningful impact in the healthcare sector. Learn more about our valued corporate partners who are helping us achieve our mission.</p>
//         </section>
  
//         {/* Partners Section */}
//         <section className="max-w-7xl mx-auto mb-12">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Valued Partners</h2>
//           <InfiniteScroll/>

  
//         </section>
  
//         {/* Partnership Opportunities Section */}
//         <section className="max-w-7xl mx-auto mb-12">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Become a Corporate Partner</h2>
//           <p className="text-lg text-gray-700 mb-6">We are always looking for like-minded corporate partners to join us in our mission to improve healthcare for underserved communities. If you're interested in collaborating with us, please get in touch.</p>
//           <a href="mailto:partnerships@bmmf.org" className="bg-[#00634A] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#588D7F] transition">Contact Us</a>
//         </section>
//       </div>
//     );
//   }
  

// pages/corporate-partners.js

import InfiniteScroll from "@/components/frontend/InfiniteScroll";

export default function CorporatePartners() {
  return (
    <div className="py-12 px-4 bg-gray-50">
      {/* Heading Section */}
      <section className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00634A] mb-4">
          Our Corporate Partners
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed text-left">
          Together, we are making a meaningful impact in the healthcare sector. Learn more about our valued corporate partners who are helping us achieve our mission.
        </p>
      </section>

      {/* Partners Section */}
      <section className="max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
          Our Valued Partners
        </h2>
        <div className="flex justify-center items-center overflow-hidden">
          <InfiniteScroll />
        </div>
      </section>

      {/* Partnership Opportunities Section */}
      <section className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Become a Corporate Partner
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 text-left">
          We are always looking for like-minded corporate partners to join us in our mission to improve healthcare for underserved communities. If you're interested in collaborating with us, please get in touch.
        </p>
        <a
          href="mailto:partnerships@bmmf.org"
          className="inline-block bg-[#00634A] text-white py-2 px-6 rounded-full text-base font-semibold hover:bg-[#588D7F] transition-all duration-300 shadow-md"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
