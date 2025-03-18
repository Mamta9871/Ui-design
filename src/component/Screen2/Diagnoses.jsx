import React from 'react';
import { FaTimesCircle, FaEdit, FaPlusCircle } from 'react-icons/fa';

const Diagnoses = () => (
  <div className="bg-gray-300 rounded-xl shadow p-6 pb-32">
    <div className="flex items-center justify-between mb-2">
      <h2 className="font-semibold text-3xl">Diagnoses</h2>
      <FaPlusCircle className="text-gray-700 cursor-pointer mr-32" />
    </div>

    <div className="flex items-center gap-2 text-sm">
    <FaEdit className="text-gray-700 cursor-pointer size-6 mb-3" /> 
      <FaTimesCircle className="text-gray-700 cursor-pointer size-6 mb-3" />
      <p className="font-medium">Major Depressive Disorder (MDD), recurrent, moderate - F33.1</p>
    </div>

    <div className="flex items-center gap-2 text-sm">
      <FaEdit className="text-gray-700 cursor-pointer size-4" />
      <FaTimesCircle className="text-gray-700 cursor-pointer size-4" />
      <p className='font-medium mb-1'>Hypertension - I10</p>
    </div>
  </div>
);

export default Diagnoses;
