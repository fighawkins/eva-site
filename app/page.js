import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-20 items-center  min-h-screen">
      <h1 className="text-4xl lg:text-7xl text-black opacity-80">Eva Knowles</h1>
      <div className="w-3/5 lg:w-1/3 h-3/5 lg:h-1/3 bg-center bg-cover relative opacity-80">
        <img src="/image3.png" alt="Image" className="w-full h-full object-cover" />
      </div>
      <div className="mt-4 text-center flex flex-col space-y-4">
        <p className="text-base lg:text-lg text-gray-600">
          was born in 1990
        </p>
        <p className="text-base lg:text-lg text-gray-600">
          and grew up in Northwest Washington State…
        </p>
      </div>
    </div>
  );
};

export default Home;