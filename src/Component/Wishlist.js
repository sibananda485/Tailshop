import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataMain } from "../Data/ProuductData";
import TostContext from "../Context/TostContext";


export default function Wishlist({ wish, setWish }) {
  const notice = useContext(TostContext);
  return (
    <>
      <div className="w-[80%] mx-auto min-h-screen px-2 z-30 lg:max-w-full xsm:w-full xsm:px-1">
        
        <div className="mx-2 flex justify-start flex-wrap gap-5 xsm:gap-2">

          { 
          wish.map((ele) => {
            return (
              <>
                <div
                  className="w-[18%] p-8 flex flex-col items-center justify-between gap-3 rounded shadow-md   relative xsm:w-[31%] xsm:p-2"
                  >
                  <Link
                    to={`/detail/${ele.id}`}
                    className="flex flex-col items-center"
                  >
                  <img
                    className="w-full h-32 object-contain xsm:h-16"
                    src={ele.images[0]}
                    alt=""
                    />
                  <div>
                    <p className="line-clamp-1 xsm:text-sm">{ele.title}</p>
                  </div>
                  </Link>
                  <i
                    onClick={() => {
                      dataMain[ele.id - 1].wish = false;
                      const temp = wish.filter((ele2) => ele2.id !== ele.id );
                      notice("Item Removed From Wishlist","info")
                      setWish(temp);
                    }}
                    class="fa-solid fa-trash-can absolute right-3 top-3 text-red-500 transition hover:text-red-800 cursor-pointer xsm:text-sm xsm:top-1 xsm:right-2"
                  ></i>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
