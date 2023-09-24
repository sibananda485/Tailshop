import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import C1 from "../Assets/c1.png" 
import C2 from "../Assets/c2.png" 
import C3 from "../Assets/c3.png" 

export default function Crousal() {
  return (
    <>
      <div className="w-full xsm:h-32">
        <Splide
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            gap: "1rem",
            type: "loop",
            height: "15rem",
            breakpoints: {
              425: {
                height: "8rem",
              },
            },
          }}
        >
          <SplideSlide>
            <img
              className="w-full h-full object-cover object-top"
              src={C2}
              alt=""
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="w-full h-full object-cover"
              src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/afeafbc79ffde4d5.jpg?q=50"
              alt=""
            />
          </SplideSlide>
          
          <SplideSlide>
            <img
              className="w-full h-full object-cover object-top"
              src={C1}
              alt=""
            />
          </SplideSlide>
          
          <SplideSlide>
            <img
              className="w-full h-full object-cover object-top"
              src={C3}
              alt=""
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="w-full h-full object-cover"
              src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/5d7b3930dbada2c4.jpg?q=50"
              alt=""
            />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}
