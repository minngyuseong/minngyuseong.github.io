"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/autoplay"

interface AutoplaySwiperProps {
  children: React.ReactNode
}

export default function AutoplaySwiper({ children }: AutoplaySwiperProps) {
  return (
    <div className="relative mx-auto w-screen overflow-hidden">
      {/* 왼쪽 fade overlay */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-50 bg-gradient-to-r from-white to-transparent" />

      {/* 오른쪽 fade overlay */}
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-50 bg-gradient-to-l from-white to-transparent" />

      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={13}
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
  )
}
