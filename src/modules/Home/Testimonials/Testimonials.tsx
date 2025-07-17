import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from 'swiper';
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";
import data from "../../../data/imgTestimonials.json";

export default function Testimonials() {
  const testimonials = Array.isArray(data) ? data : [];
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = testimonials.length;

  return (
    <div className="relative bg-gray-50 py-12 px-4">
      <h2 className="mb-4 text-center text-3xl font-bold text-green-900">
        Cảm nhận học viên
      </h2>
      <p className="mb-10 text-center text-gray-500">
        Mọi người nói gì về Antoree
      </p>

      {/* Background SVG Decoration */}
      <img
        src="https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/ffdefd8709ef55917e404b6a9cae02fa58ffd62c/src/Testimonials/Ellipse%202.svg"
        alt=""
        className="absolute left-0 top-0 w-36 opacity-10"
      />
      <img
        src="https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/ffdefd8709ef55917e404b6a9cae02fa58ffd62c/src/Testimonials/Group%203.svg"
        alt=""
        className="absolute right-0 top-10 w-40 opacity-10"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex + 1;
            const prevIndex = (activeIndex - 1 + totalSlides) % totalSlides;
            const nextIndex = (activeIndex + 1) % totalSlides;
            const isSide = index === prevIndex || index === nextIndex;

            return (
              <SwiperSlide key={index}>
                <div
                  className={`h-full rounded-xl bg-white p-6 shadow transition duration-300 ${
                    isActive
                      ? "bg-yellow-50 scale-105"
                      : isSide
                      ? "opacity-60 scale-95"
                      : "opacity-40 scale-90"
                  }`}
                >
                  {/* Avatar Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.uri}
                      alt={item.name}
                      className="h-16 w-16 rounded-full border-2 border-white shadow object-cover"
                    />
                  </div>

                  {/* Comment */}
                  <p className="mb-4 text-center text-gray-600">
                    {item.comment}
                  </p>

                  {/* Name + Role */}
                  <div className="mt-4 border-t pt-4 text-center">
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === activeIndex ? "bg-yellow-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
