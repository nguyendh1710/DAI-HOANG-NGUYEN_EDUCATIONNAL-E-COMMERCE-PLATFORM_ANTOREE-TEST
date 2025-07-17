import React from "react";
import { motion } from "framer-motion";

type ProductModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

export default function Modal({ children, onClose }: ProductModalProps) {
  if (!children) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-2xl p-6 w-[40vw] max-h-[90vh] overflow-y-auto relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg transition duration-300 hover:scale-110"
        >
          X
        </button>
        {children}
      </motion.div>
    </div>
  );
}
