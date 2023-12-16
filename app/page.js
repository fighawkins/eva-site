import React from 'react';
import RandomRotateText from './RandomRotateText';

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-20 items-center min-h-screen">
      <div className="w-3/5 lg:w-1/3 h-3/5 lg:h-1/3 bg-center bg-cover relative opacity-80">
        <img src="/image3.png" alt="Image" className="w-full h-full object-cover" />

        <div >
          <h1 className="text-center text-4xl lg:text-7xl text-black">
            <RandomRotateText text="Eva Knowles" />
          </h1>
        </div>

        <div className=" bottom-0 w-full text-center pb-4">
          <div className="text-base lg:text-lg text-black">
            was born in 1990
          </div>
          <div className="text-base lg:text-lg text-black">
            and grew up in Northwest Washington State…
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;