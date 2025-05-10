import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import logo from "../assets/images/shopibag-logo1.png";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useCart } from "../hooks/useCart";
import { BiUser } from "react-icons/bi";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { isLoggedIn } = useLogin();

  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/cart");
  };

  const { cartCount } = useCart();

  const searchProduct = async (event) => {
    event.preventDefault();
    let searchInput = document.getElementById("search");
    const searchValue = searchInput.value.trim();
    navigate(`/search/${searchValue}`);
    searchInput.value = "";
  };

  return (
    <header className="w-full h-auto fixed top-0 z-30">
      <div className="w-full h-[60px] bg-white  flex items-center justify-between gap-10 px-5 py-7 ">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
          <p className="text-sm">SHOPiBAG</p>
        </div>
        {isLoggedIn ? (
          <div className="flex gap-5 text-3xl text-blue-500">
            <div className="flex relative" onClick={handleCartClick}>
              <FaShoppingCart />
              <span className="absolute text-sm text-white font-bold right-0 top-0 bg-black rounded-full w-5 h-5 text-center">
                {cartCount}
              </span>
            </div>
            <BiUser
              onClick={() => {
                navigate("/profile");
              }}
            />
            <IoMenu onClick={() => setMenuOpen(true)} />
          </div>
        ) : (
          <div className="flex justify-between items-center gap-5">
            <button
              className="font-bold text-blue-500 hover:text-blue-300"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            <button
              className="bg-blue-500 text-white p-2 font-bold rounded-sm hover:bg-blue-300"
              onClick={() => {
                navigate("/signup");
              }}
            >
              SignUp
            </button>
          </div>
        )}
      </div>
      <form
        className="w-full h-16 px-2 py-3 relative flex  items-center bg-slate-50"
        onSubmit={searchProduct}
      >
        <IoSearch
          className="absolute text-xl right-5"
          onClick={searchProduct}
        />
        <input
          type="search"
          name="search"
          id="search"
          className="outline-none border-2 border-black w-full rounded-full h-full bg-transparent px-8 py-3"
          placeholder="search categories, products brand....."
        />
      </form>
    </header>
  );
};

export default Navbar;
