import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./doctorselection.css";

function DoctorSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const doctors = [
    {
      name: "Dr. Kumar",
      specialization: "General Physician",
      time: "10:00 AM",
      icon: "👨‍⚕️",
    },
    {
      name: "Dr. Priya",
      specialization: "Cardiologist",
      time: "11:30 AM",
      icon: "👩‍⚕️",
    },
  ];

  return (
    <div className="doctor-wrapper">
      <h2 className="doctor-title">Select Doctor & Time</h2>
      <p className="doctor-subtitle">
        Choose your preferred doctor and available slot
      </p>

      <div className="doctor-list">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className={`doctor-card ${
              selected === index ? "active" : ""
            }`}
            onClick={() => setSelected(index)}
          >
            <div className="doctor-icon">{doc.icon}</div>
            <div className="doctor-info">
              <h3>{doc.name}</h3>
              <p>{doc.specialization}</p>
              <span className="doctor-time">⏰ {doc.time}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        className="book-btn"
        disabled={selected === null}
        onClick={() => navigate("/appointment")}
      >
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorSelection;
