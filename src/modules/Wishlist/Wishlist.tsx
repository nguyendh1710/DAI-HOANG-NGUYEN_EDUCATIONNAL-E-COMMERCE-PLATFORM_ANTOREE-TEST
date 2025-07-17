import { useFavorites } from "../../hook/useFavorites";
import FavoriteItem from "./FavoriteItem/FavoriteItem";

export default function Wishlist() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <p className="text-center text-xl font-semibold text-gray-500 py-16 ">
        💔 Bạn chưa có khóa học yêu thích nào.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-100 to-green-50 py-10 px-7">
      <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-pink-500 via-orange-400 to-indigo-500 bg-clip-text text-transparent text-center drop-shadow-md">
        💖 Danh sách khóa học yêu thích
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-600 p-1 transition-transform duration-300 hover:scale-105 group"
          >
            <div
              className="bg-white rounded-3xl overflow-hidden flex flex-col h-full 
                         transition-all duration-500 group-hover:shadow-[0_0_20px_4px_rgba(255,0,255,0.7)]
                         "
            >
              <FavoriteItem product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
