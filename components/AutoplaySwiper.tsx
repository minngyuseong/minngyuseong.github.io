"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

interface AutoplaySwiperProps {
  children: React.ReactNode;
}

export default function AutoplaySwiper({ children }: AutoplaySwiperProps) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={6}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
