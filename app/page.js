import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-20 items-center min-h-screen">
      <div className="w-3/5 lg:w-1/3 h-3/5 lg:h-1/3 bg-center bg-cover relative opacity-80">
        <img src="/image3.png" alt="Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-between items-center text-center">
          <div className="mt-8">
            <h1 className="text-4xl lg:text-7xl text-black ">Eva Knowles</h1>
          </div>
          <div className="mb-4 text-center flex flex-col space-y-4">
            <p className="text-base lg:text-lg text-white">
              was born in 1990
            </p>
            <p className="text-base lg:text-lg text-white">
              and grew up in Northwest Washington State…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
