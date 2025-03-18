import React from "react";

const WorkingOnSection = () => (
  <div className="bg-white p-4 -mt-2 rounded-2xl shadow">
    <h2 className="text-xl text-black-500">Things I'm Working On</h2>
    <div className="mt-2 space-y-2">
      <div className="bg-gray-300 text-black p-3 rounded-2xl shadow-inner">
        <h3 className="text-lg font-medium">Depression</h3>
        <p className="text-sm text-gray-600 mt-1">
          Keep working on DBT Skills with <br /> Janet Green
          <br />
          Increase my lexapro tomorrow to two <br /> pills
        </p>
      </div>
      <div className="bg-gray-300 bg-opacity-50 text-black p-3 rounded-2xl">
        <h3 className="font-medium text-lg">Substance Use</h3>
        <p className="text-sm text-black mt-1">Continue with my meetings and therapy</p>
      </div>
      <div className="bg-purple-200 text-black p-3 rounded-2xl">
        <h3 className="font-medium text-lg">Relationship issues</h3>
        <p>Continue working on my skills with Janet</p>
      </div>
    </div>
  </div>
);

export default WorkingOnSection;
