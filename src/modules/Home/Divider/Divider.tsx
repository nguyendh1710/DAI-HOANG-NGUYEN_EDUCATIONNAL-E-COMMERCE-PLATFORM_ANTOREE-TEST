import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Divider() {
  const items = [
    ["Mua khóa học dễ – Chinh phục ước mơ nhanh"],
    ["Học thông minh – Vững bước tương lai."],
    ["Nơi kiến thức kết nối mọi hành trình "],
    ["Khóa học chất – Giá trị thật"],
    ["Học điều bạn muốn – Khi bạn cần"],
    ["Với Antoree kiến thức ở gần bạn hơn bao giờ hết"],
    ["Giáo dục số – Mở lối tương lai số"],
  ];
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="w-full min-h-24"
      >
        {items.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center space-x-1 min-h-24">
              {/* Icon */}
              <svg
                width={54}
                height={34}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.5 8H20L14.5 11.5L16 18L12 14.5L8 18L9.5 11.5L4 8H10.5L12 2Z"
                  fill="currentColor"
                  className="text-yellow-400"
                />
              </svg>
              {/* Text bên trái */}
              <h4 className="text-2xl font-bold uppercase bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                {text}
              </h4>
              {/* Icon */}
              <svg
                width={54}
                height={34}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.5 8H20L14.5 11.5L16 18L12 14.5L8 18L9.5 11.5L4 8H10.5L12 2Z"
                  fill="currentColor"
                  className="text-yellow-400"
                />
              </svg>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
