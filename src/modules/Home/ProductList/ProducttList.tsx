import { useState, useEffect } from "react";
import { Search, Sparkles } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getProducts, getSuggestion } from "../../../apis/productAPI";
import { getCartSuggestion } from "../../../apis/cartAPI";
import userData from "./../../../data/userData.json";
import ProductItem from "./ProductItem/ProductItem";
import Modal from "../../../componets/Modal";
import Details from "../../Details/Details";
import { Product } from "./../../../types/ProductType";
import ViewHistory from "./ViewHistory/ViewHistory";

export default function ProductList() {
  const { data: mockProducts = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  // nhận api khi bấm nút yêu thích
  const { mutate: onGetSuggestion } = useMutation({
    mutationFn: (favorites: number[]) => getSuggestion(favorites),
    onMutate: () => {
      setIsSuggestionLoading(true);
      setSuggestionError(null); // Reset lỗi trước mỗi lần gọi API
    },
    onSuccess: (data: Product[]) => {
      setSuggestions(data);
    },
    onError: (error: any) => {
      console.error("Lỗi API gợi ý:", error);
      setSuggestionError("Không thể tải gợi ý lúc này. Vui lòng thử lại!!");
    },
    onSettled: () => {
      setIsSuggestionLoading(false);
    },
  });
  // nhận api khi bấm nút giỏ hàng
  const { mutate: onGetCartSuggestion } = useMutation({
    mutationFn: (cart: number[]) => getCartSuggestion(cart),
    onMutate: () => {
      setIsSuggestionLoading(true);
      setSuggestionError(null); // Reset lỗi trước mỗi lần gọi API
    },
    onSuccess: (data: Product[]) => {
      setSuggestionsFromCart(data);
    },
    onError: (error: any) => {
      console.error("Lỗi API gợi ý:", error);
      setSuggestionError(
        "Không thể tải gợi ý từ giỏ hàng lúc này. Vui lòng thử lại!!"
      );
    },
    onSettled: () => {
      setIsSuggestionLoading(false);
    },
  });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [detailOfProduct, setDetailOfProduct] = useState<Product | null>(null);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [suggestionsFromCart, setSuggestionsFromCart] = useState<Product[]>([]);
  const [viewHistory, setViewHistory] = useState<Product[]>([]);
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const [isSuggestionLoading, setIsSuggestionLoading] = useState(false);
  const [suggestionError, setSuggestionError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("userDataLogin", JSON.stringify(userData));
  }, []);

  useEffect(() => {
    let products = Array.isArray(mockProducts) ? [...mockProducts] : [];

    if (search.trim() !== "") {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter === "lt500") {
      products = products.filter((p) => p.price < 500000);
    } else if (filter === "500-1m") {
      products = products.filter(
        (p) => p.price >= 500000 && p.price <= 1000000
      );
    } else if (filter === "gt1m") {
      products = products.filter((p) => p.price > 1000000);
    }

    products = products.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );

    setFilteredProducts(products);
    setVisibleCount(6);
  }, [search, filter, minPrice, maxPrice, mockProducts]);
  //lich su xem
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("viewHistory") || "[]");
    setViewHistory(history);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleLoadLess = () => {
    setVisibleCount(6);
  };
  const handleOpenModal = (isShowModal: boolean, product: Product) => {
    setShowModal(isShowModal);
    setDetailOfProduct(product);

    // Cập nhật lịch sử xem
    const existing = JSON.parse(localStorage.getItem("viewHistory") || "[]");

    const updatedHistory = [
      product,
      ...existing.filter((p: Product) => p.id !== product.id),
    ].slice(0, 20);

    localStorage.setItem("viewHistory", JSON.stringify(updatedHistory));
    setViewHistory(updatedHistory);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // tương tác gợi ý yêu thích
  const handleSuggestionClick = () => {
    const favoritesString = localStorage.getItem("favorites");
    const favoritesData = favoritesString ? JSON.parse(favoritesString) : [];
    const favoriteIds = favoritesData.map((item: any) => item.id);

    console.log("Favorites hiện tại:", favoriteIds);

    onGetSuggestion(favoriteIds); // Chỉ dùng mutation
  };
  // tương tác gợi ý giỏ hàng
  const handleCartSuggestionClick = () => {
    const cartString = localStorage.getItem("cart");
    const cartData = cartString ? JSON.parse(cartString) : [];
    const cartIds = cartData.map((item: any) => item.id);

    console.log("Cart hiện tại:", cartIds);

    onGetCartSuggestion(cartIds); // Chỉ dùng mutation
  };
  if (isLoading) {
    return (
      <h1 className="text-center text-xl font-semibold py-10">Loading...</h1>
    );
  }
  console.log("Render: suggestions.length =", suggestions.length);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="mb-4 text-center text-3xl font-bold text-green-900">
        Khóa học
      </h2>
      {/* Tìm kiếm */}
      <div className="relative w-full md:w-1/3 mx-auto mb-6">
        <Search
          className="absolute left-2 top-2 text-gray-400 animate-pulse"
          size={20}
        />
        <input
          type="text"
          placeholder="Tìm khóa học..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      {/* Gợi ý khóa học phù hợp */}
      <div className="text-center mb-10">
        <button
          onClick={handleSuggestionClick}
          className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition"
        >
          <Sparkles className="inline-block mr-2 text-yellow-400 animate-pulse" />
          Gợi ý khóa học phù hợp
        </button>
        {/* Xử lý lỗi */}

        {suggestionError && (
          <p className="text-red-600 text-sm font-semibold animate-pulse">
            {suggestionError}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {loadingSuggestion ? (
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4].map((_, idx) => (
              <div
                key={idx}
                className="w-32 h-8 bg-gray-200 animate-pulse rounded-xl"
              />
            ))}
          </div>
        ) : (
          suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {isSuggestionLoading
                ? [...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="w-[150px] h-8 rounded-xl bg-gray-200 animate-pulse"
                    ></div>
                  ))
                : suggestions.length > 0
                ? suggestions.map((product) => (
                    <button
                      key={`suggest-${product.id}`}
                      onClick={() => handleOpenModal(true, product)}
                      className="max-w-[150px] truncate px-3 py-2 rounded-xl border border-gray-300 bg-gradient-to-r from-white/0 via-yellow-50 to-white/0 text-gray-800 font-medium text-sm shadow-sm hover:shadow-md transition hover:scale-105"
                    >
                      {product.name}
                    </button>
                  ))
                : null}
            </div>
          )
        )}
      </div>
      {/* Gợi ý khóa học nâng cao từ giỏ hàng */}
      <div className="text-center mb-10">
        <button
          onClick={handleCartSuggestionClick}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          <Sparkles className="inline-block mr-2 text-yellow-400 animate-pulse" />
          Gợi ý khóa học nâng cao
        </button>
        {/* Xử lý lỗi */}

        {suggestionError && (
          <p className="text-red-600 text-sm font-semibold animate-pulse">
            {suggestionError}
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {loadingSuggestion ? (
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4].map((_, idx) => (
              <div
                key={idx}
                className="w-32 h-8 bg-gray-200 animate-pulse rounded-xl"
              />
            ))}
          </div>
        ) : (
          suggestionsFromCart.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {isSuggestionLoading
                ? [...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="w-[150px] h-8 rounded-xl bg-gray-200 animate-pulse"
                    ></div>
                  ))
                : suggestionsFromCart.length > 0
                ? suggestionsFromCart.map((product) => (
                    <button
                      key={`suggest-${product.id}`}
                      onClick={() => handleOpenModal(true, product)}
                      className="max-w-[150px] truncate px-3 py-2 rounded-xl border border-gray-300 bg-gradient-to-r from-white/0 via-yellow-50 to-white/0 text-gray-800 font-medium text-sm shadow-sm hover:shadow-md transition hover:scale-105"
                    >
                      {product.name}
                    </button>
                  ))
                : null}
            </div>
          )
        )}
      </div>
      {/* lich su xem */}
      <ViewHistory
        viewHistory={viewHistory}
        onProductClick={(product) => handleOpenModal(true, product)}
        onClearHistory={() => {
          localStorage.removeItem("viewHistory");
          setViewHistory([]);
        }}
      />

      {/* Lọc và Lưới sản phẩm */}
      <div className="flex flex-col md:flex-row sm:items-center md:items-start gap-10">
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-xl shadow p-4 space-y-4">
            <h3 className="text-lg font-bold text-green-800">Lọc giá</h3>

            <div className="flex flex-wrap gap-2">
              <button
                className={`px-3 py-1 rounded-full border text-sm ${
                  filter === "lt500" ? "bg-green-600 text-white" : "bg-gray-100"
                }`}
                onClick={() => setFilter("lt500")}
              >
                Dưới 500K
              </button>
              <button
                className={`px-3 py-1 rounded-full border text-sm ${
                  filter === "500-1m"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setFilter("500-1m")}
              >
                500K - 1M
              </button>
              <button
                className={`px-3 py-1 rounded-full border text-sm ${
                  filter === "gt1m" ? "bg-green-600 text-white" : "bg-gray-100"
                }`}
                onClick={() => setFilter("gt1m")}
              >
                Trên 1M
              </button>
              <button
                onClick={() => {
                  setFilter("");
                  setMinPrice(0);
                  setMaxPrice(2000000);
                }}
                className="px-3 py-1 rounded-full border text-sm bg-red-100 hover:bg-red-200"
              >
                Bỏ lọc
              </button>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                Từ: {minPrice.toLocaleString()} VNĐ
              </p>
              <input
                placeholder="filter price"
                type="range"
                min="0"
                max="2000000"
                step="50000"
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(
                    Math.min(Number(e.target.value), maxPrice - 50000)
                  )
                }
                className="w-full accent-green-600"
              />
              <p className="text-sm font-medium text-gray-700 mt-4 mb-1">
                Đến: {maxPrice.toLocaleString()} VNĐ
              </p>
              <input
                placeholder="filter price"
                type="range"
                min="0"
                max="2000000"
                step="50000"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(
                    Math.max(Number(e.target.value), minPrice + 50000)
                  )
                }
                className="w-full accent-green-600"
              />
              <p className="text-center text-xs text-gray-400 mt-1">
                Kéo để chọn khoảng giá (tối đa 2.000.000 VNĐ)
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts
                .slice(0, visibleCount)
                .map((product) => (
                  <ProductItem
                    key={product.id}
                    item={product}
                    onOpenModal={handleOpenModal}
                  />
                ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                Không có sản phẩm nào.
              </p>
            )}
          </div>

          {filteredProducts.length > 6 && (
            <div className="flex justify-center mt-8">
              {visibleCount < filteredProducts.length ? (
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-1 bg-blue-800 text-white font-bold rounded-full shadow hover:shadow-lg transition"
                >
                  Xem thêm...
                </button>
              ) : (
                <button
                  onClick={handleLoadLess}
                  className="px-6 py-1 bg-red-600 text-white font-bold rounded-full shadow hover:shadow-lg transition"
                >
                  Thu gọn
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {showModal && detailOfProduct && (
        <Modal onClose={handleCloseModal}>
          <Details product={detailOfProduct} />
        </Modal>
      )}
    </div>
  );
}
