import React, { useContext, useEffect, useState } from "react";
import { dataMain } from "../Data/ProuductData";
import ProductBanner from "./ProductBanner";
import Card from "./Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import TostContext from "../Context/TostContext";

export default function Detail({ wish, setWish, cart, setCart }) {
  window.scrollTo(0, 0);
  const notice = useContext(TostContext);
  const isLogin = useContext(LoginContext);
  const para = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(para.id - 1);
  const [like, setLike] = useState(dataMain[index].wish);
  useEffect(() => {
    setLike(dataMain[index].wish);
    setIndex(para.id - 1);
  }, [para, index]);
  const handleCart = () => {
    if (isLogin === false) {
      notice("Please Login !", "error");
    } else if (cart.includes(dataMain[index])) {
      notice("Item already in Cart", "warn");
    } else {
      setCart([...cart, dataMain[para.id - 1]]);
      notice("Item added to cart", "success");
    }
  };
  const handleBuy = () => {
    if (isLogin === false) {
      notice("Please Login !", "error");
      return;
    } else if (cart.includes(dataMain[index])) {
      navigate("/cart");
    } else {
      setCart([...cart, dataMain[para.id - 1]]);
      notice("Item added to cart", "success");
      navigate("/cart");
    }
  };
  const handleClick = () => {
    if (isLogin === false) {
      notice("Please Login !", "error");
    } else {
      if (like) {
        setLike(false);
        dataMain[index].wish = false;
        const temp = wish.filter((ele) => ele.wish === true);
        setWish(temp);
        notice("Item Removed from wishList", "info");
      } else {
        dataMain[index].wish = true;
        wish.push(dataMain[index]);
        setLike(!like);
        notice("Item Added to wishList", "success");
      }
    }
  };
  return (
    <>
      <div className="w-[90%] mx-auto my-10 flex items-start gap-16 relative xsm:w-full xsm:flex-col xsm:gap-1 xsm:my-6">
        <div className="h-[80vh] min-w-[25%] flex flex-col justify-center items-center sticky top-24 xsm:w-full xsm:h-[60vh] xsm:static">
          <div className="h-[60%] relative xsm:h-full grow-0 flex-shrink-0">
            <Splide
              aria-label="My Favorite Images"
              options={{
                rewind: true,
                gap: "1rem",
                type: "loop",
                height: "60vh",
                width: "25vw",
                breakpoints: {
                  425: {
                    height: "60vh",
                    width: "100vw",
                  },
                },
              }}
            >
              {dataMain[index].images.map((ele) => {
                return (
                  <SplideSlide>
                    <img src={ele} className="h-full object-contain object-center mx-auto my-auto" alt="" />
                  </SplideSlide>
                );
              })}
            </Splide>
            <i
              onClick={handleClick}
              class="fa-regular fa-heart absolute top-0 text-2xl cursor-pointer text-pink-500 -right-12 xsm:right-5"
            ></i>
            {like && (
              <i
                onClick={handleClick}
                class="fa-solid fa-heart absolute top-0 text-2xl cursor-pointer text-pink-500 -right-12 xsm:right-5"
              ></i>
            )}
          </div>
          <div className="w-full mt-auto space-y-3 xsm:fixed xsm:flex xsm:bottom-0 xsm:m-0 xsm:p-0 xsm:space-y-0 xsm:divide-x-2">
            <button
              onClick={handleBuy}
              className="w-full py-3 rounded font-semibold transition bg-cyan-600 text-white hover:bg-cyan-700 xsm:rounded-none"
            >
              Buy
            </button>
            <button
              onClick={handleCart}
              className="w-full py-3 rounded font-semibold transition bg-cyan-600 text-white hover:bg-cyan-700 xsm:rounded-none"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="space-y-10 xsm:px-2">
          <div className="space-y-2">
            <h1 className="text-3xl">{dataMain[index].title}</h1>

            <h2 className="text-2xl font-bold text-green-600">
              ₹{dataMain[index].price}
            </h2>
            <p className="w-fit px-2 py-1 rounded-lg text-sm flex items-center gap-1 bg-indigo-700 text-white">
              {dataMain[index].rating.toPrecision(2)}
              <i class="text-xs fa-solid fa-star"></i>
            </p>
          </div>
          <div className="space-y-5">
            <p className="font-bold">Highlight</p>
            <ul className="list-disc ps-4">
              <li>
                <li>17.12 cm (6.74 inch) HD Display</li>
                <li>108MP + 2MP | 8MP Front Camera</li>
                <li>5000 mAh Battery</li>
                <li>T612 Processor</li>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <p className="font-bold">Description</p>
            <h1 className="text-xl">{dataMain[index].description}</h1>
            {/* <p>
              Tailshop Pvt. Ltd is a leading ecommerce store where you can find
              your favourite product in you fingertips. we provide products
              belongs to smartphones, laptop, grocery, home applience, decore,
              any many more with convenient payment including UPI ,credit, debit
              cards also for those who are unable to pay before delivery that is
              cash on delivery. With 1 million happy customer delivered 34
              million products accross india.
            </p> */}
            <p>{dataMain[index].story}</p>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="my-5 text-2xl ms-10 xsm:text-lg xsm:ms-3">
        Similar Products
      </h1>
      <ProductBanner button={false}>
        {dataMain
          .filter((ele, ind) => {
            return ele.category === dataMain[index].category;
          })
          .map((ele) => {
            return <Card {...ele}></Card>;
          })}
      </ProductBanner>
      <h1 className="my-5 text-2xl ms-10 xsm:text-lg xsm:ms-3">
        Based on your recent Activity
      </h1>
      <ProductBanner button={false}>
        {dataMain
          .filter((ele, ind) => {
            return ele.rating>4.0 && ind>8 && ind<17;
          })
          .map((ele) => {
            return <Card {...ele}></Card>;
          })}
      </ProductBanner>
    </>
  );
}
