import React, { useState, useEffect,createContext, ReactNode } from 'react';
import { Product } from '../types/ProductType';  

// Khai báo kiểu dữ liệu context
type FavoritesContextType = {
  favorites: Product[];    
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>;
};

type FavoritesProviderProps = {
  children: ReactNode;
};

// Tạo context với giá trị mặc định
export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  setFavorites: () => {},   // Hàm rỗng mặc định
});

// Component Provider
export default function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    // Lấy favorites từ localStorage khi load trang
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  // Tự động lưu vào localStorage khi favorites thay đổi
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
