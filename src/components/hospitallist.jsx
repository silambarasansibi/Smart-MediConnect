import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./hospitallist.css";

function HospitalList() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const hospitals = [
    {
      name: "City Government Hospital",
      type: "Government",
      icon: "🏛️",
    },
    {
      name: "Life Care Hospital",
      type: "Private",
      icon: "🏥",
    },
    {
      name: "Metro Multi-Speciality Hospital",
      type: "Private",
      icon: "🏥",
    },
  ];

  return (
    <div className="hospital-wrapper">
      <h2 className="hospital-title">Nearby Hospitals</h2>

      <div className="hospital-list">
        {hospitals.map((hospital, index) => (
          <div
            key={index}
            className={`hospital-card ${
              selected === hospital.name ? "active" : ""
            }`}
            onClick={() => setSelected(hospital.name)}
          >
            <span className="hospital-icon">{hospital.icon}</span>
            <div>
              <h3>{hospital.name}</h3>
              <p>{hospital.type} Hospital</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="select-btn"
        disabled={!selected}
        onClick={() => navigate("/doctors")}
      >
        Select Hospital
      </button>
    </div>
  );
}

export default HospitalList;
