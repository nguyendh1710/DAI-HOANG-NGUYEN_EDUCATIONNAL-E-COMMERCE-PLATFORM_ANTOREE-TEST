import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: 20, suffix: "+", label: "Năm Kinh Nghiệm" },
    { value: 10000, suffix: "+", label: "Học Viên" },
    { value: 30, suffix: "+", label: "Khóa Học" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-indigo-400/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

            {/* Content block */}
            <div className="relative bg-white rounded-3xl shadow-xl p-10 ring-1 ring-gray-200 group-hover:ring-indigo-400 transform transition-transform duration-500 group-hover:scale-105">
              <p className="text-5xl font-extrabold text-indigo-600 mb-2">
                <CountUp end={item.value} duration={2} suffix={item.suffix} separator="," />
              </p>
              <p className="text-lg font-medium text-gray-700">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
