import React, { useState } from "react";
import Detail from "../Component/Detail";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Loader from "../Component/Loader";
import '@splidejs/react-splide/css';


export default function DetailPage({wish,setWish,cart,setCart}) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <>
      <Navbar></Navbar>
      {loading?<Loader></Loader>:
      <Detail wish={wish} setWish={setWish} cart={cart} setCart={setCart}></Detail>
      }
      <Footer></Footer>
    </>
  );
}
