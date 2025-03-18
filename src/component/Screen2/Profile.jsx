import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import images from '../../assets/images.jpg';
import imagem from '../../assets/imagem.jpg';
import { FaBars, FaChartBar, FaFolderOpen, FaUser } from 'react-icons/fa';

const Profile = () => (
  <div className="bg-purple-100 rounded-xl shadow p-3 flex items-center gap-3 relative">
    <div className="absolute top-3 left-12 bg-gray-800 text-white p-2 rounded-full flex flex-col items-center justify-center shadow"
         style={{ width: "60px", height: "60px" }}>
      <p className="text-sm m-0">9:02</p>
      <p className="text-sm m-0">10:00</p>
    </div>
    {/* Left Time/Date Column */}
    <div className="bg-pink-200 rounded-xl p-3 text-black-800 text-center w-32 flex-shrink-0 mt-16 shadow">
      <FaUserCircle className="mx-auto text-purple-700 text-xl mb-2" />
      <p className="font-semibold">3:10 PM</p>
      <p className="text-sm">3:09 PM</p>
      <p className="text-sm">3/14/25</p>
    </div>

    {/* Main Image - Adjusted to occupy all space */}
    <div className="flex-grow relative h-60 rounded-xl overflow-hidden">
      <img
        src={images}
        alt="Profile"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay Small Image */}
      <img
        src={imagem}
        alt="Overlay"
        className="absolute top-2 right-2 w-20 h-20 rounded shadow-md border border-white"
      />
    </div>

    {/* Right Side Menu */}
    <div className="bg-purple-100 rounded-xl shadow flex flex-col items-center w-24 py-3">
    
    {/* Menu Icon (Top) */}
    <FaBars className="text-gray-700 text-lg mb-3 cursor-pointer" />

    {/* Workspace */}
    <div className="flex flex-col items-center text-purple-800 text-sm mb-3">
      <FaChartBar className="text-lg" />
      <button className="mt-1">Workspace</button>
    </div>

    {/* Chart (with Left Border Highlight) */}
    <div className="flex flex-col items-center text-purple-800 text-sm mb-3 border-l-4 border-purple-600 pl-2">
      <FaFolderOpen className="text-lg" />
      <button className="mt-1 font-semibold">Chart</button>
    </div>

    {/* BIO (Pink Background Highlight) */}
    <div className="flex flex-col items-center text-purple-800 text-sm w-full bg-pink-200 py-2 rounded-b-xl shadow">
      <FaUser className="text-lg" />
      <button className="mt-1">BIO</button>
    </div>

  </div>
  </div>
);

export default Profile;
