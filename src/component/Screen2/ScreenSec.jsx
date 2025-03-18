import React from "react";
import Header from "./Header";
import Diagnoses from "./Diagnoses";
import Medications from "./Medications";
import Profile from "./Profile";
import BiographicalData from "./BiographicalData";

const ScreenSec = () => {
  return (
    <div className="min-h-screen bg-softPurple p-4">
      <Header />
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-3 flex flex-col gap-4">
          <Diagnoses />
        </div>
        <div className="col-span-6 flex flex-col gap-4">
          <Profile />
        </div>
        <div className="col-span-3">
          <Medications />
        </div>
      </div>
      <BiographicalData />
      
    </div>
  );
};

export default ScreenSec;
