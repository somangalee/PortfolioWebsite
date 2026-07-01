import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Fun from "./pages/Fun/Fun";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;