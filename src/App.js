import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import HealthProblem from "./components/healthproblems";
import HospitalType from "./components/hospitaltype";
import HospitalList from "./components/hospitallist";
import DoctorSelection from "./components/doctorselection";
import Appointment from "./components/appointment";
import Confirmation from "./components/confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/health" element={<HealthProblem />} />
        <Route path="/hospital-type" element={<HospitalType />} />
        <Route path="/hospitals" element={<HospitalList />} />
        <Route path="/doctors" element={<DoctorSelection />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
