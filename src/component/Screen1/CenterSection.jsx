import React from "react";
import imagem from '../../assets/imagem.jpg';

const CenterSection = () => (
  <div className="relative text-center">
    <img
      src={imagem}
      alt="Dr. Martorano"
      className="w-full rounded-lg shadow-sm"
    />
    <div className="absolute top-0 right-0 bg-gray-800 text-white p-2 rounded-full flex flex-col items-center justify-center"
         style={{ width: "60px", height: "60px" }}>
      <p className="text-sm m-0">9:02</p>
      <p className="text-sm m-0">10:00</p>
    </div>
  </div>
);

export default CenterSection;
