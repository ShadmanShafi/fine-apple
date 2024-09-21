import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fibonacci from "./pages/Fibonacci";
import CodeComparison from "./pages/CodeComparison";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fibonacci" element={<Fibonacci />} />
          <Route path="/code-comparison" element={<CodeComparison />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
