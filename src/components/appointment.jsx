import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./appointment.css";

function Appointment() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = () => {
    setError("");

    if (!name || !mobile || !date || !time) {
      setError("Please fill all required fields");
      return;
    }

    // ✅ No API now
    // Later we will send this data to backend
    navigate("/confirmation");
  };

  return (
    <div className="appointment-wrapper">
      <div className="appointment-card">
        <h2 className="title">Confirm Appointment</h2>

        {/* Appointment Summary */}
        <div className="appointment-summary">
          <p><strong>Hospital:</strong> City Government Hospital</p>
          <p><strong>Doctor:</strong> Dr. Kumar</p>
        </div>

        {/* Patient Details */}
        <input
          type="text"
          placeholder="Patient Full Name *"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Mobile Number *"
          className="input-field"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="date"
          className="input-field"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          className="input-field"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select Time Slot *</option>
          <option>09:30 AM</option>
          <option>10:00 AM</option>
          <option>11:30 AM</option>
          <option>02:00 PM</option>
          <option>04:00 PM</option>
        </select>

        <textarea
          placeholder="Symptoms / Notes (optional)"
          className="textarea-field"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm Booking
        </button>

        <p className="secure-note">
          🔒 Your booking is secure and confidential
        </p>
      </div>
    </div>
  );
}

export default Appointment;
