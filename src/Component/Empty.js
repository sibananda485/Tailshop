import React, { useContext, useEffect } from "react";
import EmptyImage from "../Assets/empty.svg";
import { Link } from "react-router-dom";
import TostContext from "../Context/TostContext";

export default function Empty({ message = "Shop now", type = "" }) {
  const notice = useContext(TostContext);
  useEffect(() => {
    notice("Empty", "error");
  });
  return (
    <>
      <div className="w-fit min-h-[80vh] mx-auto flex flex-col items-center gap-5">

        <img className="w-56" src={EmptyImage} alt="" />
        <h1 className="text-2xl">No items in your {type}</h1>
        <Link
          to="/"
          className="bg-green-500 px-5 py-2 text-white rounded transition hover:bg-green-700"
        >
          {message}
        </Link>
      </div>
    </>
  );
}
