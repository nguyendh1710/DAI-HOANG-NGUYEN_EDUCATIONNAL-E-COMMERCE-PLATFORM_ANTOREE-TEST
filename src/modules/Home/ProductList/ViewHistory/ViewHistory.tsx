import React from "react";
import { Product } from "../../../../types/ProductType";

type ViewHistoryProps = {
  viewHistory: Product[];
  onProductClick: (product: Product) => void;
  onClearHistory?: () => void;
};

export default function ViewHistory({
  viewHistory,
  onProductClick,
  onClearHistory,
}: ViewHistoryProps) {
  if (!viewHistory || viewHistory.length === 0) return null;

  return (
    <div className="mb-10">
      <h3 className="text-center font-semibold text-green-800 mb-2">
        Lịch sử xem gần đây
      </h3>

      <div className="flex flex-wrap justify-center gap-2">
        {viewHistory.map((product) => (
          <button
            key={`history-${product.id}`}
            onClick={() => onProductClick(product)}
            className="max-w-[150px] truncate px-3 py-2 rounded-xl border border-gray-300 bg-gradient-to-r from-white/0 via-green-50 to-white/0 text-green-800 font-medium text-sm shadow-sm hover:shadow-md transition hover:scale-105"
          >
            {product.name}
          </button>
        ))}
      </div>

      {onClearHistory && (
        <div className="text-center mt-2">
          <button
            onClick={onClearHistory}
            className="text-xs text-red-500 underline hover:text-red-700"
          >
            Xóa lịch sử xem
          </button>
        </div>
      )}
    </div>
  );
}
