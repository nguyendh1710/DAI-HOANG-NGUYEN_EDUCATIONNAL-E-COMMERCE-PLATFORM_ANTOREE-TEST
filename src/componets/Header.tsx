import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from '@iconify/react';

const pages = [
  { id: "cources", label: "Tìm khóa học" },
  { id: "about", label: "Về chúng tôi" },
  { id: "comunity", label: "Cộng đồng" },
  { id: "contact", label: "Liên Hệ" },
];

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userDataLogin");
    if (userInfo) {
      try {
        const userArray = JSON.parse(userInfo);
        const userData = Array.isArray(userArray) ? userArray[0] : null;
        setUser(userData);
      } catch (err) {
        console.error("Không lấy được userInfo từ localStorage", err);
      }
    }
  }, []);

  const handleNavigate = (page: any) => {
    const element = document.getElementById(`${page.id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false);
  };

  const handleGoToWishlist = () => {
    navigate("/wishlist");
    setIsNavOpen(false);
  };

  const handleGoToCart = () => {
    navigate("/cart");
    setIsNavOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <a
          href="/"
          className="text-xl font-bold text-blue-600 flex items-center"
        >
          <img src="./logo.png" alt="logo" className="w-auto h-10 mr-2" />
          <span className="hidden sm:block">Học Tập 4.0</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-5">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => handleNavigate(page)}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              {page.label}
            </button>
          ))}

          <motion.button
            onClick={handleGoToWishlist}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 px-3 py-1 text-red-500 hover:text-white hover:bg-red-500 rounded-full transition"
          >
            <Heart className="w-5 h-5" />
            <span className="hidden lg:inline">Yêu thích</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleGoToCart}
            className="relative text-green-600 hover:text-green-800 transition text-xl"
            aria-label="Thêm vào giỏ hàng"
          >
            <Icon icon="mdi:cart-outline" width="24" height="24" className="text-gray-700" />
          </motion.button>

          {user && (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition"
              >
                <img
                  src={
                    user?.profilePictureUrl?.startsWith("http")
                      ? user.profilePictureUrl
                      : process.env.PUBLIC_URL + user.profilePictureUrl
                  }
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="ml-2 font-medium hidden lg:block">
                  {user.name}
                </span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 bg-white shadow rounded-lg py-2 w-44 z-50"
                  >
                    <button
                      onClick={() => {
                        localStorage.removeItem("userDataLogin");
                        window.location.reload();
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Đăng xuất
                    </button>
                    <button
                      onClick={() => navigate("/profile")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Trang cá nhân
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`md:hidden ml-4 relative z-50 p-2 rounded-full border shadow ${
            isNavOpen
              ? "bg-gradient-to-r from-red-500 to-red-400 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          } transition`}
          aria-label="Toggle navigation menu"
        >
          {isNavOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="fixed inset-0 bg-white z-40 flex flex-col p-6 overflow-y-auto shadow-2xl"
          >
            <div className="flex justify-end">
              <button
                aria-label="Toggle navigation menu"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-6">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handleNavigate(page)}
                  className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition"
                >
                  {page.label}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleGoToCart}
                className="flex items-center justify-center gap-2 relative text-green-600 hover:text-green-800 transition text-xl"
                aria-label="Thêm vào giỏ hàng"
              >
               <Icon icon="mdi:cart-outline" width="24" height="24" className="text-gray-700" />
                <span>Giỏ hàng</span>
              </motion.button>
              <button
                onClick={handleGoToWishlist}
                className="flex items-center justify-center gap-2 text-red-500 hover:text-red-600 font-semibold text-lg"
              >
                <Heart className="w-5 h-5" />
                <span>Yêu thích</span>
              </button>

              {user && (
                <div className="flex flex-col items-center text-center mt-8">
                  <img
                    src={user.profilePictureUrl}
                    alt="Avatar"
                    className="w-14 h-14 rounded-full object-cover mb-2"
                  />
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>

                  <button
                    onClick={() => navigate("/profile")}
                    className="mt-3 text-blue-600 font-medium hover:underline"
                  >
                    Trang cá nhân
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("userDataLogin");
                      window.location.reload();
                    }}
                    className="mt-1 text-red-500 font-medium hover:underline"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
