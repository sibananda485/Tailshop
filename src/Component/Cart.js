import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import TostContext from "../Context/TostContext";

export default function Cart({ cart, setCart, total, setTotal }) {
  useEffect(() => {
    setTotal(cart.reduce((a, b) => a + b.price, 0));
  }, [cart, setTotal]);
  const notice = useContext(TostContext);

  return (
    <>
      <div className="w-[80%] flex justify-between items-start mx-auto gap-6 xsm:w-full xsm:flex-col">
        <div className="w-[80%] p-5 flex flex-col shadow-md xsm:w-full xsm:p-1">
          {cart.map((ele) => {
            return (
              <div className=" flex items-center  py-5 gap-32 xsm:gap-5 xsm:p-2  border-b-black">
                <div className="w-1/6 h-40 xsm:w-[25%] xsm:h-20">
                  <Link to={`/detail/${ele.id}`}>
                    <img
                      className="w-full h-full object-contain mx-auto"
                      src={ele.images[0]}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="flex w-5/6 flex-col gap-1 xsm:w-4/6 xsm:gap-1">
                  <p className="line-clamp-1 text-xl">{ele.title}</p>
                  <p className="line-clamp-1 xsm:hidden">{ele.description}</p>
                  <div className="flex flex-col xsm:flex-row xsm:gap-8">
                    <p>₹{ele.price}</p>
                    <p>Qty 1</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setCart(cart.filter((ele2) => ele2.id !== ele.id));
                        notice("Item Removed From cart", "info");
                      }}
                      className="px-3 border border-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="my-4 self-end xsm:w-full">
            <Link
              to="/payment"
              className="px-10 py-2 rounded bg-green-500 transition hover:bg-green-700 text-white xsm:w-full xsm:mt-5"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="w-[20%] shadow-md xsm:w-full">
          <div className="px-3 flex flex-col divide-y-2">
            <p className="my-5 text-xl">Price Details</p>
            <ul className="py-2 flex justify-between">
              <li>Price ({cart.length} items)</li>
              <li>₹{total}</li>
            </ul>
            <ul className="py-2 flex justify-between">
              <li>Discount</li>
              <li>− ₹100</li>
            </ul>
            <ul className="py-2 flex justify-between">
              <li>Delivery Charges</li>
              <li className="text-purple-600 font-semibold">Free</li>
            </ul>
            <ul className="py-2 flex justify-between">
              <li>Total Amount</li>
              <li>₹{total - 100}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
