"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BannerSlider = () => {
    const slides = [
        {
            image: "/images/1920x1080.jpg",
            text: "Empowering Communities for a Better Tomorrow",
        },
        {
            image: "/images/1920x1080.jpg",
            text: "Join Us in Making a Difference",
        },
        {
            image: "/images/1920x1080.jpg",
            text: "Together, We Can Change Lives",
        },
        {
            image: "/images/1920x1080.jpg",
            text: "Building a Brighter Future for All",
        },
        {
            image: "/images/1920x1080.jpg",
            text: "Be the Change You Want to See",
        },
    ];

    return (
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
            {/* Swiper Container */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                // pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <motion.div
                                    className="text-white text-center px-4"
                                    initial={{ x: "100vw" }}
                                    animate={{ x: 0 }}
                                    transition={{ type: "spring", stiffness: 80 }}
                                >
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                                        {slide.text}
                                    </h2>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-[#FFB422] bg-transparent p-2 rounded-full">
                <FaArrowLeft size={30} />
            </div>
            <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-[#FFB422] bg-transparent p-2 rounded-full">
                <FaArrowRight size={30} />
            </div>
        </div>
    );
};

export default BannerSlider;

