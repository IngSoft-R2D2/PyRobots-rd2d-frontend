import { useNavigate } from "react-router-dom";
import "./Navigate.css";

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

  const listMatches = async() => {
    navigate("/matchesList");
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
        <p>
          <button onClick={listMatches}>listar partidas</button>
        </p>
      </div>
    );
};

export default Home;