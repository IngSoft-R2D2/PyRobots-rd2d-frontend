import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  const goToMatchForm = async() => {
    navigate("/matches");
  }

  const goToBotForm = async() => {
    navigate("/robots");
  }

  const seeBoard = async() => {
    navigate("/board");
  }

  return (
      <div>
        <h1>Binvenide</h1>
        <h2>Estas son las acciones que puedes elegir</h2>
        <p>
          <button onClick={goToMatchForm}>crear partida</button>
        </p>
        <p>
          <button onClick={goToBotForm}>crear Robot</button>
        </p>
        <p>
          <button onClick={seeBoard}>ver Tablero</button>
        </p>
      </div>
    );
};

export default Home;