import "./App.css";
import { useState } from "react";
import WelcomePage from "./pages/welcomePage";
import Login from "./pages/login";
import SignUp from "./pages/SignUpPage";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/profile";

import { Routes, Route } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);

  return (
    <div className="w-full bg-slate-50 h-screen">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          element={
            <Layout
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              searchProducts={searchProducts}
              setSearchProducts={setSearchProducts}
            />
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
