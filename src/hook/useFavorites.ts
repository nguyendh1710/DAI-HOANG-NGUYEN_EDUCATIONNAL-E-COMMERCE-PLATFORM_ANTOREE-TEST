import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { Product } from '../types/ProductType';

export function useFavorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  // Kiểm tra sản phẩm đã nằm trong favorites chưa
  const isFavorite = (productId: number) => {
    return favorites.some((item) => item.id === productId);
  };

  // Thêm sản phẩm vào danh sách yêu thích
  const addFavorite = (product: Product) => {
    if (!isFavorite(product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  // Xóa sản phẩm khỏi danh sách yêu thích
  const removeFavorite = (productId: number) => {
    setFavorites(favorites.filter((item) => item.id !== productId));
  };

  // Toggle yêu thích (thêm nếu chưa có, xóa nếu đã có)
  const toggleFavorite = (product: Product) => {
    isFavorite(product.id) ? removeFavorite(product.id) : addFavorite(product);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite
  };
}
