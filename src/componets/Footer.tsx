import React from "react";
import { Icon } from '@iconify/react';


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:text-left text-center">
        {/* Logo + Slogan */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-brand">
            Antoree Academy
          </h1>
          <p className="text-sm leading-6">
            Nền tảng giáo dục thương mại điện tử hiện đại, kết nối tri thức tới
            hàng triệu học viên trên toàn quốc.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Khóa học</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Tiếng Anh Thương Mại
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Tiếng Anh Giao tiếp
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Tiếng Anh cho người đi làm
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Tiếng Anh cho trẻ em
              </a>
            </li>
          </ul>
        </div>

        {/* Chính sách */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Chính sách</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Điều khoản dịch vụ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Chính sách hoàn tiền
              </a>
            </li>
          </ul>
        </div>

        {/* Liên hệ + Social */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Liên hệ</h2>
          <p className="text-sm mb-1">Email: support@antoree.vn</p>
          <p className="text-sm mb-4">Hotline: 1800 1234</p>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white text-gray-900 hover:bg-blue-500 hover:text-white transition"
            >
         <Icon icon="fa6-brands:facebook" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white text-gray-900 hover:bg-blue-400 hover:text-white transition"
            >
             <Icon icon="fa6-brands:twitter" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white text-gray-900 hover:bg-pink-500 hover:text-white transition"
            >
            <Icon icon="fa6-brands:instagram" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white text-gray-900 hover:bg-red-600 hover:text-white transition"
            >
           <Icon icon="fa6-brands:youtube" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2025 Antoree Academy. All rights reserved.
      </div>
    </footer>
  );
}
