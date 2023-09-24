import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, images, title }) {
  return (
    <>
      <Link
        to={`/detail/${id}`}
        className="w-[13%] p-5 rounded flex flex-col items-center justify-between bg-white space-y-5 xsm:w-[32%]"
      >
        <img
          className="w-full h-28 object-contain xsm:h-16"
          src={images[0]}
          alt=""
        />
        <h2 className="line-clamp-1 xsm:text-sm">{title}</h2>
      </Link>
    </>
  );
}
