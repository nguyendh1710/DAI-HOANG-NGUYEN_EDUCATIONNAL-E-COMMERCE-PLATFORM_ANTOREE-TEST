import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Product } from '../types/ProductType';

export function useCart() {
  const { cart, setCart } = useContext(CartContext);

  // Kiểm tra sản phẩm đã nằm trong favorites chưa
  const isCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  // Thêm sản phẩm vào cart
  const addCart= (product: Product) => {
    if (!isCart(product.id)) {
      setCart([...cart, product]);
    }
  };

  // Xóa sản phẩm khỏi cart
  const removeCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Toggle cart (thêm nếu chưa có, xóa nếu đã có)
  const toggleCart = (product: Product) => {
    isCart(product.id) ? removeCart(product.id) : addCart(product);
  };

  return {
    cart,
    addCart,
    removeCart,
    toggleCart,
    isCart
  };
}
