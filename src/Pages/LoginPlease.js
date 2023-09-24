import React, { useEffect } from "react";
import Cry from "../Assets/cry.png";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
export default function LoginPlease() {
  useEffect(()=>{
    toast.error("Please Login First", {
      theme: "colored",
      position: "top-center",
    });
  })
  return (
    <> 
      <ToastContainer />
      <div className="w-fit h-screen  mx-auto flex flex-col items-center gap-6 my-16 xsm:mt-20">
        <img className="w-52 xsm:w-36" src={Cry} alt="" />
        <h1 className="text-3xl w-fit xsm:text-2xl">First Login Please !</h1>
        <button className="bg-green-500 px-8 py-2 text-white text-xl rounded">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </>
  );
}
