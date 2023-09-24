import React from "react";

export default function ProductBanner({ message, children, button = true }) {
  let visibility = "flex";
  if (!button) {
    visibility = "hidden";
  }
  return (
    <>
      <div className="p-3 my-1 flex justify-between bg-cyan-50 lg:flex-col gap-y-5 ">
        <div
          className={`max-w-[13%] ${visibility} flex-col justify-center items-center gap-4 lg:max-w-full lg:flex-row lg:justify-between`}
        >
          <h3 className="text-center text-xl xsm:text-sm">{message}</h3>
          <button className="w-fit px-4 py-1 bg-cyan-700 text-white ">
            View
          </button>
        </div>

        <div className="flex justify-around flex-wrap grow gap-1">
          {children}
        </div>
      </div>
    </>
  );
}
