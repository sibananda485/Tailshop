import React, { useContext, useState } from "react";
import Login from "../Component/Login";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import LoginContext from "../Context/LoginContext";
import Loader from "../Component/Loader";

export default function LoginPage({ setLogin ,demo}) {
  const isLogin = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <>
      <Navbar></Navbar>
      {loading ? (
        <Loader></Loader>
      ) : isLogin ? (
        "Already Logged IN"
      ) : (
        <Login setLogin={setLogin}></Login>
      )}
      <Footer></Footer>
    </>
  );
}
