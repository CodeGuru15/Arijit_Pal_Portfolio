import React, { useState } from "react";
import GoldBar from "./GoldBar";

const Test = () => {
  const myArray = Array.from({ length: 20 }, () => null);

  const Tile = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        setIsHovered(false);
      }, 1500); // Adjust the timeout as needed
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full h-full rounded-full ${
          isHovered ? " shadow-gold shadow-custom" : ""
        }`}
      ></div>
    );
  };
  return (
    <div className="relative flex flex-wrap justify-center w-full h-screen gap-10overflow-hidden bg-gold">
      {/* {myArray.map((_, i) => {
        return (
          <div key={i} className="h-24 aspect-square">
            <Tile />
          </div>
        );
      })} */}
      {/* <GoldBar /> */}
      {/* <img src="grid.svg" alt="" className="z-30" /> */}
      <div className=" h-full bg-cover w-full bg-[url('hex.png')]"></div>
    </div>
  );
};
export default Test;
