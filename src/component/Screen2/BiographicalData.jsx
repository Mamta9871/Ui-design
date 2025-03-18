import React from 'react';

const BiographicalData = () => (
  <div className="bg-[#F5ECE0] p-4 rounded-xl shadow mt-4">
    
    {/* Header with Navigation Tabs */}
    <div className="flex flex-wrap gap-2 mb-4">
      <button className=" text-black">Biographical Data</button>
      <button className="bg-[#DAD2FF] text-black px-4 py-2 rounded-full shadow">ID</button>
      <button className="bg-[#DAD2FF] text-black px-4 py-2 rounded-full shadow">Course of TX</button>
      <button className="bg-[#DAD2FF] text-black px-4 py-2 rounded-full shadow">TX Plan</button>
      <button className="bg-[#DAD2FF] text-black px-4 py-2 rounded-full shadow">Psychiatric</button>
      <button className="bg-[#DAD2FF] text-black px-4 py-2 rounded-full shadow">Current Social</button>
      <button className="bg-[#DAD2FF] text-black px-4 py-2 rounded-full shadow">Recent Issues</button>
      <button className="bg-[#DAD2FF] text-black px-4 py-2 rounded-full shadow">Developmental</button>
      <button className="bg-[#DAD2FF] text-black px-4 py-2 rounded-full shadow">Engagement</button>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="bg-gray-300 p-4 rounded-lg shadow">
        <h3 className="font-semibold">Identifying Data</h3>
        <p>34-year-old female presenting with a history of MDD and alcohol use disorder Lorem 
          ipsum dolor sit amet consectetur adipisicing elit. Hic, culpa.
          ipsum dolor sit amet consectetur adipisicing elit. Hic, culpa.
          ipsum dolor sit amet consectetur adipisicing elit. Hic, culpa.
          ipsum dolor sit amet consectetur adipisicing elit. Hic, culpa.
          First depressive episode at 17, struggles with DBT and emotional regulation
          </p>
      </div>
      <div className="bg-gray-300 p-4 rounded-lg shadow">
        <h3 className="font-semibold">Treatment Plan</h3>
        <p>She is currently on Lexapro 10mg daily, working with a therapist on DBT strategies...
          First depressive episode at 17, struggles with DBT and emotional regulation
          First depressive episode at 17, struggles with DBT and emotional regulation
          First depressive episode at 17, struggles with DBT and emotional regulation
          First depressive episode at 17, struggles with DBT and emotional regulation
        </p>
      </div>
      <div className="bg-gray-300 p-4 rounded-lg shadow">
        <h3 className="font-semibold">Psychiatric History</h3>
        <p>First depressive episode at 17, struggles with DBT and emotional regulation...</p>
      </div>
      <div className="bg-gray-300 p-4 rounded-lg shadow">
        <h3 className="font-semibold">Recent Symptoms</h3>
        <p>Reduction in emotional reactivity, mild alcohol use disorder...</p>
      </div>
      <div className="bg-gray-300 p-4 rounded-lg shadow">
        <h3 className="font-semibold">Developmental History</h3>
        <p>Raised in high-conflict household, emotional validation inconsistent...</p>
      </div>
      <div className="bg-gray-300 p-4 rounded-lg shadow">
        <h3 className="font-semibold">Engagement in Treatment</h3>
        <p>Most sessions attended, some cancellations due to internet issues...</p>
      </div>
    </div>

  </div>
);

export default BiographicalData;
