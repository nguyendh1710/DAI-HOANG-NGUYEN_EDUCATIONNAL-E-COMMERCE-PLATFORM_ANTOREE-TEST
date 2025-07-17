import React from "react";
import { Product } from "./../../types/ProductType";
import Button from "./../../componets/Button";
import { Star as StarIcon } from "lucide-react";

type ProductDetailsProps = {
  product?: Product | null;
};

export default function Details({ product }: ProductDetailsProps) {
  if (!product) {
    return (
      <p className="text-center py-10 text-gray-500">
        Không có dữ liệu sản phẩm.
      </p>
    );
  }
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl mb-4 shadow-md"
      />
      <h2 className="font-bold text-xl text-brand">{product.name}</h2>
      <p className="text-red-500 text-lg font-semibold">
        {product.price.toLocaleString()} đ
      </p>
      <p className="my-3 text-gray-700">{product.details}</p>
      {/* Nút đăng ký */}
      <div className="flex justify-center">
        <Button size="large"> Đăng ký </Button>
      </div>
      {/* PHẦN ĐÁNH GIÁ */}
      <div className="mt-6">
        <div className="flex justify-start">
          <h3 className="font-semibold text-lg mb-3">Đánh giá học viên:</h3>
        </div>
        {product.evaluate && product.evaluate.length > 0 ? (
          product.evaluate.map((dg, index) => (
            <div
              key={index}
              className="flex items-start gap-3 mb-5 bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={dg.anh}
                alt={dg.ten}
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{dg.ten}</span>
                  <span className="text-sm text-gray-500">{dg.thoiGian}</span>
                </div>

                <div className="flex items-center mt-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      size={16}
                      className={`${
                        i < dg.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {dg.comments && (
                  <p className="italic text-gray-700 bg-white p-3 rounded-lg border mt-2 shadow-inner">
                    “{dg.comments}”
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Chưa có đánh giá nào.</p>
        )}
      </div>
    </div>
  );
}
