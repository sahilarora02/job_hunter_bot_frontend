// App.js

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming you have a Navbar component
import AllJobs from "./components/AllJobs";
import ImproveResume from "./components/ImproveResume";
import SubscribeJobs from "./components/SubscribeJobs";
import JobSummary from "./components/JobSummary";
import MainPage from "./components/MainPage";

function App() {
  useEffect(()=>{
    window.ResizeObserver = null;
  })
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/all-jobs" element={<AllJobs/>} />
        <Route path="/improve-resume" element={<ImproveResume/>} />
        <Route path="/subscribe-jobs" element={<SubscribeJobs/>} />
        <Route path="/job-summary" element={<JobSummary/>} />
      </Routes>
    </div>
  );
}

export default App;
