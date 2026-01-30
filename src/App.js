import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SoldierDetail from "./pages/SoldierDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/soldier/:id" element={<SoldierDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
