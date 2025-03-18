import TeamSection from "./TeamSection";
import WorkingOnSection from "./WorkingOnSection";
import React from 'react';

const Sidebar = () => (
  <div className="flex flex-col gap-3">
      <TeamSection />
      <WorkingOnSection />
  </div>
);

export default Sidebar;