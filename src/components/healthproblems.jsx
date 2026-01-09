import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./healthproblems.css";

function HealthProblems() {
  const navigate = useNavigate();
  const [problem, setProblem] = useState("");

  return (
    <div className="health-wrapper">
      <h2 className="health-title">Select Health Problem</h2>
      <p className="health-subtitle">
        Choose the issue you want to consult a doctor for
      </p>

      <div className="health-card">
        <select
          className="health-select"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        >
          <option value="">-- Select Problem --</option>
          <option value="Fever">🤒 Fever</option>
          <option value="Heart">❤️ Heart</option>
          <option value="Diabetes">🩸 Diabetes</option>
          <option value="Orthopedic">🦴 Orthopedic</option>
        </select>

        <button
          className="health-btn"
          disabled={!problem}
          onClick={() => navigate("/hospital-type")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HealthProblems;
