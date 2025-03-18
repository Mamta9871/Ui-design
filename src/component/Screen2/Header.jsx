import React from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Header = () => (
  <header className="bg-[#F5ECE0] -mt-4 p-2 rounded-lg shadow flex items-center justify-between">
    
    <FaBars className="text-black text-xl ml-2" />

    <div className="flex flex-1 justify-center items-center gap-2 text-gray-700">
      <span className="font-semibold">Susan Davies (Sue)</span>
      <span className="text-sm">34 Y/O Female</span>
      <span className="text-sm">5 visit (last 3/1/25) She/Her</span>
    </div>

    <FaUserCircle className="text-black text-xl mr-2" />
  </header>
);

export default Header;
