import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./confirmation.css";

function Confirmation() {
  const navigate = useNavigate();

  const [cancelled, setCancelled] = useState(false);
  const [reason, setReason] = useState("");

  const handleCancel = () => {
    if (!reason) {
      alert("Please select a reason for cancellation");
      return;
    }

    // ✅ No backend for now
    setCancelled(true);
  };

  return (
    <div className="confirm-wrapper">
      <div className="confirm-card">
        {!cancelled ? (
          <>
            <div className="confirm-icon">✅</div>

            <h2>Appointment Confirmed</h2>
            <p>
              Your appointment has been successfully booked.
              <br />
              Our medical team will take care of you.
            </p>

            <div className="confirm-details">
              <p><strong>Status:</strong> Confirmed</p>
              <p><strong>Hospital:</strong> City Government Hospital</p>
              <p><strong>Doctor:</strong> Dr. Kumar</p>
              <p><strong>Date:</strong> 12 Feb 2026</p>
              <p><strong>Time:</strong> 10:00 AM</p>
              <p><strong>Mode:</strong> In-Person Consultation</p>
            </div>

            <p className="confirm-note">
              Please arrive 15 minutes early and carry your ID.
            </p>

            {/* Cancel Section */}
            <div className="cancel-section">
              <h4>Can’t make it?</h4>

              <select
                className="cancel-select"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                <option value="">Select cancellation reason</option>
                <option>Personal emergency</option>
                <option>Health issue</option>
                <option>Schedule conflict</option>
                <option>Booked by mistake</option>
                <option>Other</option>
              </select>

              <button className="cancel-btn" onClick={handleCancel}>
                Cancel Appointment
              </button>

              <button
                className="reschedule-btn"
                onClick={() => navigate("/appointment")}
              >
                Reschedule Instead
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cancel-icon">❌</div>
            <h2>Appointment Cancelled</h2>
            <p>
              Your appointment has been cancelled successfully.
              <br />
              Reason: <strong>{reason}</strong>
            </p>

            <button
              className="book-again-btn"
              onClick={() => navigate("/health")}
            >
              Book New Appointment
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Confirmation;
