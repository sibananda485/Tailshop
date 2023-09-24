import React, { useContext, useState } from "react";
import Cash from "../Assets/cash.png";
import clickOrder from "../Assets/clickOrder.png";
import Delivery from "../Assets/delivery.png";
import { useNavigate } from "react-router-dom";
import TostContext from "../Context/TostContext";

export default function Payment({ total, setHistory, cart, setCart,demo }) {
  const notice = useContext(TostContext);
  const [paymentOption, setPaymentOption] = useState("card");
  // const [time, setTime] = useState(300);
  const navigate = useNavigate();
  const handlePlace = () => {
    setHistory((old) => [...cart, ...old]);
    setCart([]);
    notice("Hurray ! Your Order has been Placed","success")
    navigate("/order");
  };
  // setInterval(()=>{
  //   setTime(time-1);
  // },1000)
  const handleClick = (e) => {
    if (e.target.value === "cod") {
      setPaymentOption("cod");
    } else if (e.target.value === "upi") {
      setPaymentOption("upi");
    } else if (e.target.value === "card") {
      setPaymentOption("card");
    }
  };
  return (
    <>
      <div className="w-[70%] mx-auto xsm:w-screen">
        <div className="mb-10 flex items-start justify-between gap-5 xsm:flex-col">
          <div className="w-full p-5 shadow-md flex-grow">
            <div>
              <p>Payment Methods</p>
              <input
                type="radio"
                onClick={handleClick}
                value="card"
                name="payment"
                id=""
                className="align-middle me-2"
              />
              Debit / Credit / ATM Card
              <br />
              <input
                type="radio"
                onClick={handleClick}
                value="cod"
                name="payment"
                id=""
                className="align-middle me-2"
              />
              Cash on delivery
              <br />
              <input
                type="radio"
                onClick={handleClick}
                value="upi"
                name="payment"
                id=""
                className="align-middle me-2"
              />
              UPI
            </div>
            {paymentOption === "upi" ? (
              <div className="flex flex-col items-center mt-5">
                <h1>Scan to Pay ₹{total-50}</h1>
                <img
                  className="mx-auto w-1/2"
                  src="https://play-lh.googleusercontent.com/lomBq_jOClZ5skh0ELcMx4HMHAMW802kp9Z02_A84JevajkqD87P48--is1rEVPfzGVf"
                  alt=""
                />
                {/* time remaining: {time} */}
                time remaining: 300
              </div>
            ) : paymentOption === "cod" ? (
              <div className="flex flex-col items-center">
                <h1 className="my-5 text-lg">CASH on Delivery</h1>
                <div className="my-5  w-full flex justify-around">
                  <div className="h-24 flex flex-col items-center xsm:h-14">
                    <img className="h-full" src={clickOrder} alt="" />
                    <p>Order now</p>
                  </div>
                  <div className="h-24 flex flex-col items-center xsm:h-14">
                    <img className="h-full" src={Delivery} alt="" />
                    <p>Get at doorstep</p>
                  </div>
                  <div className="h-24 flex flex-col items-center xsm:h-14">
                    <img className="h-full" src={Cash} alt="" />
                    <p>Pay Cash</p>
                  </div>
                </div>
                <button
                  onClick={handlePlace}
                  className="px-5 py-2 my-10 bg-green-500 transition text-white hover:bg-green-700"
                  type="submit"
                  value="Place Order"
                >
                  Place Order
                </button>
              </div>
            ) : (
              <form className="mt-10 flex flex-col items-start gap-5" action="">
                <h1>Card Details</h1>
                <div className="space-x-2 xsm:space-x-0 xsm:space-y-5">
                  <input
                    className="p-3 border rounded bg-gray-50 xsm:w-full"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="p-3 rounded border bg-gray-50 xsm:w-full"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="space-x-2 xsm:flex xsm:justify-between xsm:items-center">
                  <input
                    className="p-3 rounded border bg-gray-50 xsm:h-fit xsm:w-1/4"
                    type="password"
                    placeholder="CVV no"
                  />
                  <input
                    className="p-3 rounded border bg-gray-50 xsm:w-2/3"
                    type="text"
                    placeholder="Card Expire eg: MM / YY"
                  />
                </div>
                <button className="bg-green-500 text-white px-5 py-2">
                  Place Order
                </button>
              </form>
            )}
          </div>
          <div className="w-[35%] shadow-md xsm:w-full">
            <div className="w-full px-3 flex flex-col divide-y-2">
              <p className="my-5 text-xl">Price Details</p>
              <ul className="py-2 flex justify-between">
                <li>Price ({cart.length} items)</li>
                <li>₹{total - 50}</li>
              </ul>
              <ul className="py-2 flex justify-between">
                <li>Discount</li>
                <li>− ₹50</li>
              </ul>
              <ul className="py-2 flex justify-between">
                <li>Delivery Charges</li>
                <li className="text-purple-700 font-bold">Free</li>
              </ul>
              <ul className="py-2 flex justify-between">
                <li>Total Amount</li>
                <li>₹{total - 50}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
