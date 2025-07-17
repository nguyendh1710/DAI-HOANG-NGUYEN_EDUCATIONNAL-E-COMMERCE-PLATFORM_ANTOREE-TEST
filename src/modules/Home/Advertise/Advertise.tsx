import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Advertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // chỉ chạy 1 lần khi vào view
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const animationLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
      },
    },
  };

  const animationRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="application"
      className="bg-cover bg-center bg-no-repeat py-6 px-4"
      style={{ backgroundImage: "url('/advertise-bg.jpg')" }}
    >
      <div
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Hình ảnh điện thoại */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={animationLeft}
          className="w-min-1/2 "
        >
          <div
            ref={ref}
            className="flex justify-start md:justify-start ms-6 md:ms-36"
          >
            <img
              src="/iphone.png"
              alt="App Preview"
              className="w-[250px] h-[430px] object-contain"
            />
          </div>
        </motion.div>
        {/* Nội dung bên phải */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={animationRight}
          className="w-1/2 text-center md:text-left"
        >
          <div className="text-white max-w-xl text-center">
            <h4 className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
              Atoree nay đã có sẵn ở hệ điều hành Android và iOS !!!
            </h4>
            <p className="text-base md:text-lg mb-4">
              Tải ngay app để tận hưởng nhiều tiện ích hơn nữa nhé
            </p>

            {/* QR code */}
            <div className="mb-4">
              <img
                src="/qr.png"
                alt="QR Code"
                className="w-[80px] h-[80px] mx-auto"
              />
            </div>

            {/* Button */}
            <div className="mb-6">
              <button className="bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 px-6 rounded-lg">
                App Miễn Phí - Tải về ngay
              </button>
            </div>

            {/* Appstore */}
            <a href="#" className="inline-block">
              <img
                src="/appstoreimg.png"
                alt="App Store"
                className="w-[150px] h-auto"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
