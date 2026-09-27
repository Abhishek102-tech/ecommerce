
import './App.css'
import Header from "./components/Header";
import FrontPage from "./FrontPage";
import CheckOut from "./CheckOut";
import { products } from "./products";
import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";

function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product, quantity) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.title === product.title);

      if (existingItem) {
        return currentCart.map((item) => item.title === product.title
          ? { ...item, quantity: item.quantity + quantity }
          : item);
      }

      return [...currentCart, { ...product, quantity }];
    });
  };

  const updateQuantity = (title, quantity) => {
    setCart((currentCart) => currentCart
      .map((item) => item.title === title ? { ...item, quantity } : item)
      .filter((item) => item.quantity > 0));
  };

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="app-shell">
      <Header cartCount={itemCount} onCartClick={() => navigate("/checkout")} />
      <Routes>
        <Route path="/" element={<FrontPage products={products} onAddToCart={addToCart} onViewCart={() => navigate("/checkout")} />} />
        <Route path="/checkout" element={<CheckOut cart={cart} onUpdateQuantity={updateQuantity} onContinueShopping={() => navigate("/")} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}

export default App
