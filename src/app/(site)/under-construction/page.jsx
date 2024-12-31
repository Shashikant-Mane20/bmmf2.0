// // pages/under-construction.js

// export default function UnderConstruction() {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-xl">
//           <h1 className="text-5xl font-extrabold text-[#00634A] mb-4">Under Construction</h1>
//           <p className="text-lg text-gray-700 mb-6">We're working hard to bring you something amazing. Please check back later!</p>
//           <div className="text-center flex justify-center mb-6">
//             <svg className="w-16 h-16 text-gray-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
//               <circle cx="12" cy="12" r="10" strokeWidth="4" strokeLinecap="round" className="opacity-75" />
//             </svg>
//           </div>
//           <p className="text-gray-500">Thank you for your patience!</p>
//         </div>
//       </div>
//     );
//   }
  

// pages/under-construction.js

export default function UnderConstruction() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-xl max-w-xl">
        <h1 className="text-5xl font-extrabold text-[#00634A] mb-4">Under Construction</h1>
        <p className="text-lg text-gray-700 mb-6">
          We're working hard to bring you something amazing. Please check back later!
        </p>
        <div className="text-center flex justify-center mb-6">
          {/* <svg
            className="w-16 h-16 text-gray-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          > */}
            {/* <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
            <circle
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-75"
            />
          </svg> */}
        </div>
        <p className="text-gray-500">Thank you for your patience!</p>
      </div>
    </div>
  );
}
