import React, {useState } from "react";
import Navbar from "../Component/Navbar";
import Crousal from "../Component/Crousal";
import Card from "../Component/Card";
import ProductBanner from "../Component/ProductBanner";
import Footer from "../Component/Footer";
import { dataMain } from "../Data/ProuductData";
import Loader from "../Component/Loader";


export default function HomePage() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <>
      <Navbar></Navbar>
      {loading ? (
        <Loader></Loader>
      ) : ( 
        <>
          <Crousal></Crousal>
          <ProductBanner message="Latest Smartphone release">
            {dataMain
              .filter((ele, ind) => {
                return ele.category==="smartphones";
              })
              .map((ele) => {
                return <Card {...ele}></Card>;
              })}
          </ProductBanner>
          <ProductBanner message="Boost your productivity">
            {dataMain
              .filter((ele, ind) => {
                return ele.category==="laptops";
              })
              .map((ele) => {
                return <Card {...ele}></Card>;
              })}
          </ProductBanner>
          <ProductBanner message="Capture your sweet moment">
            {dataMain
              .filter((ele, ind) => {
                return ele.category==="camera";
              })
              .map((ele) => {
                return <Card {...ele}></Card>;
              })}
          </ProductBanner>
          <ProductBanner message="Watch your favourite movies in big screen">
            {dataMain
              .filter((ele, ind) => {
                return ele.category==="tv";
              })
              .map((ele) => {
                return <Card {...ele}></Card>;
              })}
          </ProductBanner>
        </>
      )}
      <Footer></Footer>
    </>
  );
}
