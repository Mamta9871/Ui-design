import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screenfirst from './component/Screen1/Screenfirst';
import ScreenSec from './component/Screen2/ScreenSec';
import './index.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Screenfirst />} />
      <Route path="/second" element={<ScreenSec />} />
    </Routes>
  </Router>
);

export default App;
