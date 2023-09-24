import React, { useContext, useState } from "react";
import Cart from "../Component/Cart";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import LoginContext from "../Context/LoginContext";
import LoginPlease from "./LoginPlease";
import Loader from "../Component/Loader";
import Empty from "../Component/Empty";

export default function CartPage({ cart, setCart ,total,setTotal}) {
  const isLogin = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return ( 
    <>
      <Navbar></Navbar>

      <h1 className="w-[80%] my-4 mx-auto text-2xl xsm:w-screen xsm:my-2 xsm:text-2xl xsm:px-2">Cart</h1>
      {loading ? (
        <Loader></Loader>
      ) : isLogin ? cart.length===0?<Empty type="Cart"></Empty>:(
        <Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal}></Cart>
      ) : (
        <LoginPlease></LoginPlease>
      )}
      <Footer></Footer>
    </>
  );
}



