"use client";

import React from "react";

const InfiniteScroll = () => {
  const logos = [
    "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg",
    "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg",
    "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg",
    "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg",
    "https://cruip-tutorials.vercel.app/logo-carousel/spark.svg",
    "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg",
    "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg",
    "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg",
  ];

  return (
    <div className="relative h-32 md:h-40 bg-primary-default flex items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="relative w-full overflow-hidden">
          {/* Logos container */}
          <div className="flex animate-infinite-scroll space-x-6 md:space-x-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center items-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-10 md:h-16 lg:h-20 w-auto"
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
              >
                <img
                  src={logo}
                  alt={`Duplicate Logo ${index + 1}`}
                  className="h-10 md:h-16 lg:h-20 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
