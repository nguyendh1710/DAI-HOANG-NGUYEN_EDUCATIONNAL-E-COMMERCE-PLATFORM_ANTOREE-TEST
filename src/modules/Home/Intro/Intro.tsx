import { useState } from "react";

export default function Intro() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-black py-16 px-4 h-[80vh] flex items-center justify-center">
        {/* Video nền (chỉ là background động) */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay nội dung */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <span className="text-6xl font-extrabold tracking-widest text-white opacity-10 select-none">
            ANTOREE ACADEMY
          </span>

          {/* Thumbnail + Play button */}
          <div className="relative mt-8">
            <img
              src="/thumb.jpg"
              alt="Video Thumbnail"
              className="w-full h-[200px] object-cover rounded-lg"
            />

            {/* Nút Play với heartbeat + shockwave */}
            <button
              onClick={() => setOpen(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Shockwave effect */}
                <div className="absolute inset-0 rounded-full bg-[#18268c]/40 animate-shockwave"></div>

                {/* Play icon với heartbeat */}
                <img
                  src="/play.png"
                  alt="Play"
                  className="w-16 h-16 animate-heartbeat"
                />
              </div>
            </button>
          </div>

          <div className="mt-12">
            <p className="text-xl font-medium text-white mb-4">Về Chúng Tôi</p>
            <div className="mx-auto h-1 w-16 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Modal phát video */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full mx-4">
            {/* Nút đóng rõ ràng */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-300 transition"
            >
              &times;
            </button>

            {/* Video chính */}
            <video
              src="/introthumb.mp4"
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
