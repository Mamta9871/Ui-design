import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const AppointmentSection = () => (
  <div className="bg-purple-100 p-4 rounded-xl shadow">
    <div className="flex items-center gap-2">
      <FaCalendarAlt className="text-purple-800 text-5xl mb-3" />
      <p className="font-medium">My Next Appointment is Scheduled <br /> For <span className="font-bold">4/1/2025 at 3pm</span> </p>
    </div>
    
    <div className="mt-2 grid grid-cols-2 gap-2 justify-center">
      <button className="bg-purple-300 text-black py-1.5 text-center rounded-full text-sm hover:bg-purple-400 shadow">
        Confirm and Please Text
      </button>
      <button className="bg-gray-300 text-black py-1.5 rounded-full text-sm hover:bg-gray-400 shadow">
        I need a different time
      </button>
      <button className="bg-gray-300 text-black py-1.5 rounded-full text-sm hover:bg-gray-400 shadow">
        Confirm and Please Call
      </button>
      <button className="bg-gray-300 text-black py-1.5 rounded-full text-sm hover:bg-gray-400 shadow">
        Please call me to schedule
      </button>
    </div>
  </div>
);

export default AppointmentSection;
