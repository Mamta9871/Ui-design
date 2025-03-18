import React from 'react';

const CommunicationSection = () => (
  <div className="bg-purple-100 p-4 rounded-xl shadow">
    <h2 className="text-sm font-medium text-gray-800 mb-2">Between Appointments</h2>
    <div className="mt-2 space-y-2">
      <div className="bg-purple-200 p-2 rounded-lg shadow-sm text-sm text-purple-800 font-medium">
        I like texts to check in about my mental health - weekly
      </div>
      <div className="bg-purple-200 p-2 rounded-lg shadow-sm text-sm text-purple-800 font-medium">
        I like my team to be updated about my progress
      </div>
    </div>
  </div>
);

export default CommunicationSection;
