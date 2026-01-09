import { useNavigate } from "react-router-dom";
import "./hospitaltype.css";

function HospitalType() {
  const navigate = useNavigate();

  return (
    <div className="type-wrapper">
      <h2 className="type-title">Choose Hospital Type</h2>

      <div className="type-card-container">
        <div
          className="type-card government"
          onClick={() => navigate("/hospitals")}
        >
          <h3>🏛 Government Hospital</h3>
          <p>Affordable treatment with public healthcare</p>
        </div>

        <div
          className="type-card private"
          onClick={() => navigate("/hospitals")}
        >
          <h3>🏥 Private Hospital</h3>
          <p>Premium facilities & personalized care</p>
        </div>
      </div>
    </div>
  );
}

export default HospitalType;
