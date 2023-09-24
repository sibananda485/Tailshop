import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../Context/LoginContext";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const isLogin = useContext(LoginContext);
  const handleIn = () => {
    document.querySelector(".menu").classList.remove("hidden");
    setMenu(!menu);
  };
  const handleMenu = () => {
    document.querySelector(".menu").classList.toggle("hidden");
    setMenu(!menu);
  };
  const handleOut = () => {
    document.querySelector(".menu").classList.add("hidden");
    setMenu(!menu);
  };
  return (
    <>
      <nav className="py-3 px-10 sticky top-0 bg-cyan-700 text-white z-40 lg:px-2 md:text-sm">
        <ul className="flex justify-between items-center xsm:gap-2">
          <Link
            to="/"
            className="text-2xl font-semibold tracking-widest md:text-xl md:tracking-normal xsm:text-lg align-middle"
          >
            TailShop
          </Link>

          <li className="w-1/2 flex items-center relative xsm:grow">
            <input
              className="w-full py-1 px-2 mx-auto outline-none text-black rounded-sm"
              type="text"
              placeholder="search for products"
            />
            <i class="fa-solid fa-magnifying-glass absolute right-2 text-cyan-700"></i>
          </li>

          <li className="flex text-lg space-x-7 md:space-x-4">
            <Link
              to={isLogin?"/profile":"/login"}
              className="text-cyan-700 bg-white px-3 xsm:hidden"
            >
              {isLogin?"Profile":"Login"} 
            </Link>
            <li
              onMouseEnter={handleIn}
              onMouseLeave={handleOut}
              className="flex flex-col items-center relative md:hidden xsm:hidden"
            >
              <div>
                more
                <i class="ml-1 fa-solid fa-caret-down"></i>
              </div>
            </li>

            <Link to="/cart" className="md:hidden">
              <i class="mr-1 fa-solid align-middle fa-cart-shopping"></i>
              Cart
            </Link>
            <i
              onClick={handleMenu}
              class={
                menu
                  ? "fa-solid fa-xmark hidden md:block"
                  : "fa-solid fa-bars hidden md:block"
              }
            ></i>
          </li>
        </ul>
        <ul
          onMouseEnter={handleIn}
          onMouseLeave={handleOut}
          className="menu hidden px-7 py-3 flex flex-col items-start shadow-md absolute top-11 right-[5%] gap-1 space-y-2 rounded z-50 bg-cyan-600 text-white xsm:px-3 xsm:fixed xsm:left-0 xsm:top-0 xsm:h-full xsm:w-1/2"
        >
          <li className="mb-4 mt-2 mx-auto text-2xl font-semibold tracking-widest align-middle hidden md:text-xl md:tracking-normal xsm:text-lg  xsm:block">
            <Link to="/">TailShop</Link>
          </li>
          <div className="w-3 h-3 absolute -top-3 left-[45%] bg-cyan-600 rotate-45 xsm:hidden"></div>
          <Link to="/order" className="flex items-center xsm:text-base">
            <i class="mr-2 fa-solid fa-truck"></i>
            Order
          </Link>
          <Link to="/profile" className="items-center xsm:flex xsm:text-base">
            <i class="mr-2 fa-solid fa-user"></i>
            Profile
          </Link>
          <Link
            to="/cart"
            className="hidden items-center xsm:flex xsm:text-base"
          >
            <i class="mr-2 fa-solid fa-cart-shopping"></i>Cart
          </Link>
          <Link
            to="/login"
            className="hidden items-center xsm:flex xsm:text-base"
          >
            <i class="mr-2 fa-solid fa-right-to-bracket"></i>
            Login
          </Link>
          <Link to="/wishlist" className="flex xsm:text-base items-center">
            <i class="mr-2 fa-solid fa-heart"></i>
            Wishlist
          </Link>
          <li className="flex xsm:text-base items-center">
            <i class="mr-2 fa-solid fa-headset"></i> Help
          </li>
          <li className="flex xsm:text-base items-center">
            <i class="mr-2 fa-solid fa-info"></i>About
          </li>
        </ul>
      </nav>
    </>
  );
}
