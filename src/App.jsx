import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateMeetingCode from "./components/zegoLive/CreateMeetingCode";
import ZegoLiveRoom from "./components/zegoLive/ZegoLiveRoom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateMeetingCode />} />
        <Route path="/liveRoom" element={<ZegoLiveRoom />} />
      </Routes>
    </div>
  );
}

export default App;
