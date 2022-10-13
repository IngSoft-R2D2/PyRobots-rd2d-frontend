import { useState } from 'react';
import "./App.css";

const MatchForm = () => {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
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
        <p><input type="submit"></input></p>
      </form>
    </div>
  );
};

export default MatchForm;
