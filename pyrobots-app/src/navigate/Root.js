import { useNavigate } from "react-router-dom";
import "../App.css";

const Root = () => {
  const navigate = useNavigate();

  const goToSignUp = async() => {
    navigate("/users");
  }

  const goToLogin= async() => {
    navigate("/login");
  }

  return (
      <div>
        <h1>Binvenide a PyRobots</h1>
        <p>
          <button onClick={goToSignUp}>Registrarme</button>
        </p>
        <p>
          <button onClick={goToLogin}>Loguearme</button>
        </p>
      </div>
    );
};

export default Root;