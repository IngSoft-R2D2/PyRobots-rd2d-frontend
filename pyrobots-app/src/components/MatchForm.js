import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../App.css";

const MatchForm = () => {
  
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
        name: '',
        pwd: '',
        min: 2,
        max: 2,
        games: 1,
        rounds: 1
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('http://localhost:3000/matches', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            inputs
        })
    })
    .catch(function (error) {
        console.log(error, 'error')
        alert(error);
    });

    navigate("/home");
  }

  return(
    <div>
      <form className="App" onSubmit={handleSubmit}>
        <h1>Crear partida</h1>
        <p><label>nombre:
        <input 
          required
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        </label></p>
        <p><label>contraseña: (opcional)
        <input 
          type="password" 
          name="pwd"
          value={inputs.pwd}
          onChange={handleChange}
        />
        </label></p>
        <p><label>mínimo jugadores:
        <input 
          required min="2" max="4"
          type="number"
          name="min"
          value={inputs.min}
          onChange={handleChange}
        />
        </label></p>
        <p><label>máximo jugadores:
        <input 
          required min={inputs.min} max="4"
          type="number"
          name="max"
          value={inputs.max}
          onChange={handleChange}
        />
        </label></p>
        <p><label>juegos:
        <input 
          required min="1" max="200"
          type="number"
          name="games"
          value={inputs.games}
          onChange={handleChange}
        />
        </label></p>
        <p><label>rondas:
        <input 
          required min="1" max="10000"
          type="number" 
          name="rounds"
          value={inputs.rounds}
          onChange={handleChange}
        />
        </label></p>
        <p><button type="submit">crear</button></p>
      </form>
    </div>
  );
};

export default MatchForm;
