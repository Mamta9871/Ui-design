import React from "react";
import Navigation from "./Navigation ";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm rounded flex justify-between items-center">
        <h1 className="text-lg font-bold">Dr. Martorano</h1>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Menu</button>
      </header>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Profile Section */}
        <div className="col-span-1">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full mx-auto"
            />
            <h5 className="mt-2 font-semibold">Susan Davies</h5>
            <p className="text-gray-500">34 YO Female</p>
          </div>
        </div>

        {/* Diagnosis & Medications */}
        <div className="col-span-2">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-lg">Diagnoses</h4>
            <ul className="mt-2 space-y-1">
              <li className="bg-gray-100 p-2 rounded">Major Depressive Disorder (MDD)</li>
              <li className="bg-gray-100 p-2 rounded">Hypertension</li>
            </ul>

            <h4 className="font-bold text-lg mt-4">Medications</h4>
            <ul className="mt-2 space-y-1">
              <li className="bg-gray-100 p-2 rounded">Lexapro 10mg - Daily</li>
              <li className="bg-gray-100 p-2 rounded">Buspar 30mg - Twice a day</li>
              <li className="bg-gray-100 p-2 rounded">Lisinopril 20mg - Morning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Biographical Data & Treatment Plan */}
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <h4 className="font-bold text-lg">Treatment Plan</h4>
        <p>
          Susan is currently on Lexapro 10mg daily and working with a therapist
          to manage her symptoms.
        </p>
      </div>

      {/* Appointment & Updates */}
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <h4 className="font-bold text-lg">Next Appointment</h4>
        <p>Scheduled for 4/1/2025 at 3 PM</p>
        <button className="bg-green-500 text-white py-2 px-4 rounded mt-2">
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default Dashboard;