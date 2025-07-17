import { useCart } from "../../hook/useCart";
import CartItem from "./CartItem/CartItem";

export default function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <p className="text-center text-xl font-semibold text-gray-500 py-16 ">
        Bạn chưa chọn khóa học nào.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-100 to-green-50 py-10 px-7">
      <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-pink-500 via-orange-400 to-indigo-500 bg-clip-text text-transparent text-center drop-shadow-md">
        Giỏ hàng của bạn
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-600 p-1 transition-transform duration-300 hover:scale-105 group"
          >
            <div
              className="bg-white rounded-3xl overflow-hidden flex flex-col h-full 
                         transition-all duration-500 group-hover:shadow-[0_0_20px_4px_rgba(255,0,255,0.7)]
                         "
            >
              <CartItem product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
