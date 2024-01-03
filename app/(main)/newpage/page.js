import React from "react";
import RandomRotateText from "./RandomRotateText";
import { motion } from 'framer-motion';
import Image from "next/image";


const NewPage = () => (
  
  <div className="flex mt-10 mb-2 justify-center items-center text-center ">
   
    <div className="w-3/5 lg:w-1/3 h-3/5    relative ">
      <Image
        src="/image3.png"
        alt="Image"
        width="668"
        height="700"
        className="w-full h-full object-cover opacity-80  border-red-400"
      />
      <h1 className="absolute top-0  transform  -translate-y-10 lg:pl-20 text-2xl text-center pl-12  lg:text-6xl lg:-translate-y-0 text-red-500 lg:pt-12 "  
      >
        <RandomRotateText text="Eva Knowles" />
      </h1>
      <div className="absolute bottom-0 w-full pb-4 text-white text-sm lg:text-lg">
        
      </div>
    </div>
  </div>
 
);

export default NewPage;
