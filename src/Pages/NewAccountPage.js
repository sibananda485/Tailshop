import React, { useState } from "react";
import NewAccount from "../Component/NewAccount";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Loader from "../Component/Loader";

export default function NewAccountPage() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <>
      <Navbar></Navbar>
      {
        loading?<Loader></Loader>:
      <NewAccount></NewAccount>
      }
      <Footer></Footer>
    </>
  );
}
