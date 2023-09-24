import React from "react";
import { Link } from "react-router-dom";

export default function Order({history}){
  return (
    <> 
      <div className="w-[80%] px-2 mx-auto xsm:w-full xsm:px-1">
        <div className="divide-y-2">
          {history.map((ele) => {
            return (
              <Link to={`/detail/${ele.id}`} className="px-2 py-7 flex items-start justify-between gap-10 xsm:w-full xsm:p-2 xsm:items-center">
                <img
                  className="w-64 h-40 object-contain xsm:w-[25%] xsm:h-16"
                  src={ele.images[0]}
                  alt=""
                />
                <div className="flex justify-between grow xsm:block xsm:space-y-2">
                  <div className="w-[30%] xsm:w-full">
                    <h2 className="line-clamp-2 text-2xl xsm:line-clamp-1 xsm:text-base">
                      {ele.title}
                    </h2>
                    <li className="mt-3 text-slate-500 xsm:m-0 xsm:text-sm">
                      Ordered on {(new Date()).toLocaleDateString()}
                    </li>
                  </div>
                  <div className="">
                    <p className="font-bold text-xl text-green-500 xsm:hidden">
                      ₹{ele.price}
                    </p>
                  </div>
                  <div className="xsm:hidden">
                    <h3>Expected Delivery by tomorrow</h3>
                    <p className="text-blue-700 mt-4">
                      Your Order has been placed
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm xsm:flex-row xsm:text-xs ">
                    <button className="flex rounded border items-center text-black px-2 py-2">
                      <i class="fa-solid fa-ban mr-1 text-sm text-red-700 xsm:text-[0.7rem]"></i>
                      Cancel
                    </button>
                    <button className="px-2 py-2 border rounded text-black ">
                      <i class="mr-1 fa-solid fa-location-crosshairs"></i>Track
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
