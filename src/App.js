import React from "react";
import HeaderLeft from "./container/Header/HeaderLeft";
import { Routes, Route } from "react-router-dom";
import Summarizing from "./pages/Summarizing";
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="*" element={<HeaderLeft />} />
     </Routes>
    </div>
  );
}

export default App;
