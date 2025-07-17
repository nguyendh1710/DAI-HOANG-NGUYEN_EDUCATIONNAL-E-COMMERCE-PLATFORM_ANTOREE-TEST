import React from "react";
import { Product } from "../../../types/ProductType";
import { motion } from "framer-motion";
import { useFavorites } from "../../../hook/useFavorites";

type FavoriteItemProps = {
  product: Product;
};

export default function FavoriteItem({ product }: FavoriteItemProps) {
  const { removeFavorite } = useFavorites();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-xl p-4 flex flex-col hover:shadow-2xl transition-all duration-300"
    >
      {/* Image + Name */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-24 h-24 object-cover shadow-md"
        />
        <div>
          <h3 className="font-bold text-lg text-indigo-700">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-rose-600 font-semibold text-base">Học phí:</p>
        <p className="text-indigo-600 font-bold text-lg">
          {typeof product.price === "number"
            ? product.price.toLocaleString()
            : "Liên hệ"}{" "}
          VNĐ
        </p>
      </div>

      {/* Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => removeFavorite(product.id)}
        className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 rounded-xl font-semibold hover:brightness-110 transition shadow-md"
      >
        Bỏ khỏi yêu thích 💔
      </motion.button>
    </motion.div>
  );
}
