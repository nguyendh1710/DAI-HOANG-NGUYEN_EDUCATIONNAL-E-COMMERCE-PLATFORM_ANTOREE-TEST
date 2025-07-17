import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Quay lại đầu trang"
          className="fixed bottom-6 right-6 bg-gradient-to-tr from-pink-500 to-indigo-500 text-white rounded-full p-4 shadow-xl hover:scale-110 hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 ease-out animate-bounce z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}
