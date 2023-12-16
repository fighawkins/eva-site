import React from "react";
import RandomRotateText from "./RandomRotateText";

const Home = () => (
  <div className="flex justify-center items-center text-center">
    <div className="w-3/5 lg:w-1/3 h-3/5 lg:h-1/3 bg-center bg-cover relative opacity-80">
      <img
        src="/image3.png"
        alt="Image"
        className="w-full h-full object-cover"
      />
      <h1 className="absolute top-0 text-4xl lg:text-7xl text-black">
        <RandomRotateText text="Eva Knowles" />
      </h1>
      <div className="absolute bottom-0 w-full pb-4 text-white text-base lg:text-lg">
        <div>was born in 1990</div>
        <div>and grew up in Northwest Washington State…</div>
      </div>
    </div>
  </div>
);

export default Home;
