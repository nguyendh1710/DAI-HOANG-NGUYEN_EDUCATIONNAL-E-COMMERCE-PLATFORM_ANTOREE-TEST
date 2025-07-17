import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Home from "./modules/Home/Home";
import NotFound from "./componets/NotFound";
import Wishlist from "./modules/Wishlist/Wishlist";
import Cart from "./modules/Cart/Cart";
import FavoritesProvider from "./context/FavoritesContext";
import CartProvider from "./context/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <FavoritesProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              {/* Route mặc định khi không khớp */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </FavoritesProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
