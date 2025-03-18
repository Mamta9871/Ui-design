import React from 'react';

const TeamSection = () => (
  <div className="bg-pink-100 p-4 rounded-2xl shadow">
    <h2 className="text-xl text-black-500">My Team</h2>
    <ul className="mt-2 -ml-8">
      <li className="text-black">
        Janet Green LPC <span className="text-gray-500">My therapist</span>
      </li>
      <li className="text-black">
        Damon Jones MD <span className="text-gray-500">My Doctor</span>
      </li>
      <li className="text-black font-bold">
        David Martorano, M.D. <span className="text-gray-500">My Psychiatrist</span>
      </li>
    </ul>
  </div>
);

export default TeamSection;
