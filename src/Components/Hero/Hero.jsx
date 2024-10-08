import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Hero = () => {
    return (
        <>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-screen flex align-center items-center">
                        <div className="w-1/2 flex items-center justify-center">
                            <h1 className="text-4xl font-bold">
                                Slide 1 Heading
                            </h1>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Slide 1 Image"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen flex align-center items-center">
                        <div className="w-1/2 flex items-center justify-center">
                            <h1 className="text-4xl font-bold">
                                Slide 1 Heading
                            </h1>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <img
                                src="https://picsum.photos/600/600"
                                alt="Slide 1 Image"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen flex align-center items-center">
                        <div className="w-1/2 flex items-center justify-center">
                            <h1 className="text-4xl font-bold">
                                Slide 1 Heading
                            </h1>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Slide 1 Image"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Hero;
