import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TostContext from "../Context/TostContext";

export default function Login({ setLogin,demo }) {
  const navigate = useNavigate();
  const notice = useContext(TostContext);
  const handleSubmit = () => {
    setLogin(true);
    navigate("/");
    notice("Login Successfully","success")
  };
  return (
    <>
      <div className="w-1/4 mt-20 mx-auto text-lg xsm:w-[85%] xsm:text-base xsm:mt-5 xsm:min-h-screen">
        <div className="w-full p-8 mx-auto my-auto flex flex-col items-center gap-5 border rounded shadow-md border-gray-100 mt-12 xsm:px-5 xsm:gap-5">
          <h1 className="text-xl font-semibold">LOG IN</h1>
          <input
            className="w-full p-2 rounded outline-none bg-gray-50"
            type="text"
            placeholder="username"
            />
          <input
            className="w-full p-2 rounded outline-none bg-gray-50"
            type="password"
            placeholder="password"
            />
          <input
            onClick={handleSubmit}
            className=" w-full py-1 outline-none cursor-pointer bg-cyan-600 text-white transition hover:bg-cyan-800"
            type="submit"
            value="Login"
          />
          <Link
            to="/newaccount"
            className="text-base underline underline-offset-2 text-blue-700"
          >
            Create new account !
          </Link>
          <p className="text-sm self-end text-red-800">
            * All fields are required
          </p>
        </div>
      </div>
    </>
  );
}
