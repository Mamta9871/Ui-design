import AppointmentSection from "./AppointmentSection";
import CommunicationSection from "./CommunicationSection";
import MedicationsSection from "./MedicationsSection";
import React from 'react';

const RightSidebar = () => (
    <div className="flex flex-col gap-3">
      <MedicationsSection />
      <AppointmentSection />
      <CommunicationSection />
    </div>
);

export default RightSidebar;