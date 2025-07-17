import React, { useState, useEffect,createContext, ReactNode } from 'react';
import { Product } from '../types/ProductType';  

// Khai báo kiểu dữ liệu context
type CartContextType = {
  cart: Product[];    
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

type CartProviderProps = {
  children: ReactNode;
};

// Tạo context với giá trị mặc định
export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},   // Hàm rỗng mặc định
});

// Component Provider
export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    // Lấy cart từ localStorage khi load trang
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  // Tự động lưu vào localStorage khi favorites thay đổi
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
}
