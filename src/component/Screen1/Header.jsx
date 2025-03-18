import { FaBars, FaUserCircle } from 'react-icons/fa';
import React from 'react';

const Header = () => (
    <header className="flex justify-between items-center p-2 bg-white shadow-sm">
      <FaBars className="text-black text-xl ml-3" />
      <h1 className="text-xl font-bold text-black">Dr. Martorano</h1>
      <FaUserCircle className="text-black text-2xl mr-3" />
    </header>
);

export default Header;
