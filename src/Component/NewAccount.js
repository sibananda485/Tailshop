import React, { useContext } from "react";
import TostContext from "../Context/TostContext";
import { useNavigate } from "react-router-dom";

export default function NewAccount() {
  const notice = useContext(TostContext);
  const navigate = useNavigate(); 
  return (
    <>
      <div className="mt-10 mx-2 text-lg xsm:mt-0 xsm:text-base">
        <div
          className="w-fit mx-auto p-8 border rounded border-gray-100 shadow-md flex flex-col gap-5 xsm:w-full xsm:px-3 xsm:gap-8"
          action="#"
        >
          <h1 className="mb-5 text-center text-xl font-semibold xsm:mb-0">
            New account
          </h1>
          <div className="space-x-2 xsm:flex xsm:flex-row xsm:space-x-0 gap-5">
            <input
              className="p-2 rounded outline-none bg-gray-50 xsm:w-1/2"
              type="text"
              placeholder="firstname"
            />
            <input
              className="p-2 rounded outline-none bg-gray-50 xsm:w-1/2"
              type="text"
              placeholder="lastname"
            />
          </div>
          <div className="space-x-2 xsm:flex xsm:space-x-0 xsm:gap-5">
            <input
              className="p-2 outline-none rounded bg-gray-50 xsm:w-full"
              type="text"
              placeholder="username"
            />
            <input className="xsm:w-fit" value="2012/10/02" type="date" />
          </div>
          <input
            className=" p-2 outline-none rounded bg-gray-50"
            type="email"
            placeholder="email id"
          />
          <input
            className=" p-2 outline-none rounded bg-gray-50"
            type="password"
            placeholder="Create password"
          />
          <input
            className=" p-2 outline-none rounded bg-gray-50"
            type="password"
            placeholder="confirm password"
          />
          <div>
            <input className="align-middle" type="checkbox" /> Term & condition
          </div>
          <button
          onClick={()=>{
            notice("Account Created Successfully","success");
            navigate("/login")
          }}
            className="py-2 bg-cyan-600 transition cursor-pointer text-white hover:bg-cyan-800"
          >create</button>
          <p className="text-sm text-end  text-red-800">
            * All fields are required
          </p>
        </div>
      </div>
    </>
  );
}
