import React, { useContext, useState } from "react";
import Wishlist from "../Component/Wishlist";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import LoginContext from "../Context/LoginContext";
import LoginPlease from "./LoginPlease";
import Loader from "../Component/Loader";
import Empty from "../Component/Empty";

export default function LoginPage({wish,setWish}) {
  const isLogin = useContext(LoginContext)
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 200);
  return (
    <>  
      <Navbar></Navbar>
      <h1 className="w-[80%] my-8 text-2xl mx-auto xsm:my-2 xsm:px-2">My wishlist</h1>
      {loading?<Loader></Loader>:isLogin?wish.length===0?<Empty message="Add to wish List" type="wish List"></Empty>:
      <Wishlist wish={wish} setWish={setWish} ></Wishlist>:
      <LoginPlease></LoginPlease>
      }
      <Footer></Footer>
    </>
  );
}
 