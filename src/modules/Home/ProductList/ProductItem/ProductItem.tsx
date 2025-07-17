import React from "react";
import { motion } from "framer-motion";
import { Product } from "./../../../../types/ProductType";
import { useFavorites } from "../../../../hook/useFavorites";
import { useCart } from "../../../../hook/useCart";

type ProductItemProps = {
  item: Product;
  onOpenModal?: (isShowModal: boolean, productNeedDetails: Product) => void;
};

export default function ProductItem({ item, onOpenModal }: ProductItemProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { toggleCart, isCart } = useCart();

  const handleDetail = (item: Product) => {
    onOpenModal?.(true, item);
  };

  return (
    <motion.div
      key={item.id}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden group relative flex flex-col"
    >
      <div className="overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-base font-bold line-clamp-1">{item.name}</h3>
          <p className="text-indigo-500 font-semibold text-sm mt-1">
            Học phí:{" "}
            {typeof item.price === "number"
              ? item.price.toLocaleString()
              : "Liên hệ"}{" "}
            VNĐ
          </p>
          <p className="text-gray-500 text-xs mt-1 line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleDetail(item)}
            className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow hover:shadow-lg transition text-center w-full sm:w-auto"
          >
            Xem chi tiết
          </motion.button>

          <div className="flex justify-center sm:justify-end items-center gap-4">
            <button
              onClick={() => toggleCart(item)}
              className={`text-2xl transition ${
                isCart(item.id)
                  ? "text-green-500 animate-heartbeat"
                  : "text-gray-400"
              }`}
            >
              {isCart(item.id) ? "🛍️" : "🛒"}
            </button>

            <button
              onClick={() => toggleFavorite(item)}
              className={`text-2xl transition ${
                isFavorite(item.id)
                  ? "text-pink-500 animate-heartbeat"
                  : "text-gray-400"
              }`}
            >
              {isFavorite(item.id) ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
