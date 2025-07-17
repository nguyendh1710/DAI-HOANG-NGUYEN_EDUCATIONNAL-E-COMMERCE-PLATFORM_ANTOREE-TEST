import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../apis/productAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../../../componets/Button";

type BannerProps = {
  onRegisterClick: () => void;
};

export default function Banner({ onRegisterClick }: BannerProps) {
  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <h1 className="text-center text-xl font-semibold py-10">Loading...</h1>
    );
  }

  return (
    <div className="relative w-full h-[50vh] md:h-[90vh] bg-black">
      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {banners.map((banner: any) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-full">
              <img
                src={banner.image}
                alt={`banner-${banner.id}`}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay mờ cố định */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>

      {/* Khối nội dung trung tâm cố định */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Học Tiếng Anh Để Bứt Phá Tương Lai
        </h1>
        <p className="text-sm md:text-lg mb-1 opacity-90">
          Nâng cao kỹ năng giao tiếp chuyên nghiệp
        </p>
        <p className="text-sm md:text-lg mb-6 opacity-90">
          Đạt chứng chỉ quốc tế - Mở rộng cơ hội nghề nghiệp
        </p>
        <Button size="large" onClick={onRegisterClick}>Học thử ngay</Button>
      </div>
    </div>
  );
}
