import React from "react";
import Sidebar from "./Sidebar";
import CenterSection from "./CenterSection";
import RightSidebar from "./RightSidebar";
import BottomSection from "./BottomSection";
import Header from "./Header";
import '../../index.css';

const Screenfirst = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-100 to-white-200">
      <Header />

      <div className="max-w-full px-3 md:px-4 py-2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* Left Sidebar */}
          <div className="col-span-1 mr-16">
            <Sidebar />
          </div>

          {/* Center Section */}
          <div className="col-span-1 flex flex-col gap-3 -ml-16 -mr-16">
            <CenterSection />
            <BottomSection />
          </div>

          {/* Right Sidebar */}
          <div className="col-span-1 ml-16">
            <RightSidebar />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Screenfirst;
