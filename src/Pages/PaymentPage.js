import React, { useState } from "react";
import Payment from "../Component/Payment";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Loader from "../Component/Loader";

export default function LoginPage({total,setHistory,history,cart,setCart,demo}) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <>
      <Navbar></Navbar>
      <h1 className="w-[80%] my-4 mx-auto text-2xl xsm:w-screen xsm:my-2 xsm:text-2xl xsm:px-2">Payment</h1>
      {loading?<Loader></Loader>:
      <Payment demo={demo} total={total} history={history} setHistory={setHistory} cart={cart} setCart={setCart}></Payment>
      }
      <Footer></Footer>
    </>
  );
}
