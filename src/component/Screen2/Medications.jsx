import React from 'react';
import { FaPlusCircle, FaEdit, FaTimesCircle, FaAngleDoubleRight } from 'react-icons/fa';

const Medications = () => (
  <div className="bg-[#DAD2FF] rounded-lg shadow p-4">
    
    {/* Header Section */}
    <div className="flex justify-between items-center mb-3">
      <h2 className="font-bold text-lg flex items-center gap-1">
        Medications <FaPlusCircle className="text-gray-600 cursor-pointer" />
      </h2>
      <div className="flex items-center gap-1 bg-gray-400 px-2 py-2 mb-2 rounded-2xl shadow text-black">
        Walmart - East 2nd <FaEdit className="cursor-pointer" />
      </div>
    </div>

    {/* Medication List */}
    <ul className="space-y-2 mt-2 text-sm -ml-10">
      {/* Lexapro */}
      <li className="bg-purple-100 flex justify-between items-center p-2 rounded-3xl shadow">
        <span className='ml-2'>Lexapro 10 mg 1 PO daily #30 Ref 1 last 2/9/25</span>
        <div className="flex gap-2">
          <FaEdit className="text-gray-700 cursor-pointer" />
          <FaAngleDoubleRight className="text-gray-700 cursor-pointer" />
          <FaTimesCircle className="text-gray-700 cursor-pointer" />
        </div>
      </li>

      {/* Buspar */}
      <li className="bg-purple-200 flex justify-between items-center p-2 rounded-3xl shadow">
        <span className='ml-2'>Buspar 30 mg 1 PO BID #60 Ref 1 last 2/9/25</span>
        <div className="flex gap-2">
          <FaEdit className="text-gray-700 cursor-pointer" />
          <FaAngleDoubleRight className="text-gray-700 cursor-pointer" />
          <FaTimesCircle className="text-gray-700 cursor-pointer" />
        </div>
      </li>

      {/* Lisinopril */}
      <li className="bg-pink-200 flex justify-between items-center p-2 rounded-3xl shadow">
        <span className='ml-2'>Lisinopril 20 mg 1 PO BID</span>
        <div className="flex gap-2">
          <FaEdit className="text-gray-700 cursor-pointer" />
          <FaAngleDoubleRight className="text-gray-700 cursor-pointer" />
          <FaTimesCircle className="text-gray-700 cursor-pointer" />
        </div>
      </li>
    </ul>

  </div>
);

export default Medications;
