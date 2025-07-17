import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        style={{ width: `${scrollProgress}%` }}
        className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 transition-all duration-200"
      />
    </div>
  );
}
