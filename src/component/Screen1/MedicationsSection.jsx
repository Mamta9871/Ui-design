import React from 'react';

const MedicationsSection = () => (
  <div className="p-4 rounded-lg shadow bg-white">
    <h2 className="text-gray-800 text-xl">Medications</h2>
    <div className="mt-2">
      <h3 className="font-medium text-sm">Prescribed by Dr. Martorano</h3>
      <div className="bg-purple-100 p-1 rounded-2xl mt-1">
        <p className="text-black ml-2">Lexapro 10 mg 1 by mouth daily <br /> For Depression</p>
      </div>
      <div className="bg-purple-100 p-1 rounded-2xl mt-1">
        <p className="text-black ml-2">Buspar 30 mg 1 by mouth twice a <br /> day - For Anxiety</p>
      </div>
    </div>
    <div className="mt-2">
      <h3 className="font-medium text-xl">I'm also taking</h3>
      <div className="bg-orange-100 p-2 rounded-3xl mt-1">
        <p className="text-black ml-2">Lisinopril 20 mg 1 by mouth in the morning <br /> For High Blood Pressure <br /> (Damon Jones, M.D.)</p>
      </div>
    </div>
    <div className="mt-2">
      <h3 className="font-medium text-xl">My Medications will be sent to</h3>
      <div className="bg-gray-300 p-2 mx-16 justify-center rounded-3xl mt-1">
        <p className="text-black text-center mb-2"> Walmart - East 2nd</p>
      </div>
    </div>
  </div>
);

export default MedicationsSection;
