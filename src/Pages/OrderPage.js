import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Order from "../Component/Order";
import Footer from "../Component/Footer";
import LoginContext from "../Context/LoginContext";
import LoginPlease from "./LoginPlease";
import Loader from "../Component/Loader";
import Empty from "../Component/Empty";
import TostContext from "../Context/TostContext";

export default function LoginPage({ history, setHistory }) {
  const isLogin = useContext(LoginContext);
  const notice = useContext(TostContext);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 800);
  useEffect(()=>{
    if (!isLogin) {
      notice("Please Login First", "error");
    }
  },[isLogin,notice])

  return (
    <>
      <Navbar></Navbar>

      <h1 className="w-[80%] my-4 mx-auto text-2xl xsm:w-screen xsm:my-2 xsm:text-2xl xsm:px-2">My order</h1>
      {loading ? (
        <Loader></Loader>
      ) : isLogin ? (
        history.length === 0 ? (
          <Empty message="Order Something.." type="order"></Empty>
        ) : (
          <Order history={history} setHistory={setHistory}></Order>
        )
      ) : (
        <LoginPlease />
      )}
      <Footer></Footer>
    </>
  );
}
