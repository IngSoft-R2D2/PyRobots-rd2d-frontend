import "../Match.css";

const MatchForm= (props) => {

    const inputs = props.inputs;
    const setInputs = props.setInputs; 
    const robots = props.robots;  

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

  return(
    <div>
      <form className="App" onSubmit={(event) => props.onSubmit(event)}>
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
        <p><label>Seleccione un robot:
        <select 
          required
          type="number" 
          name = "robot"
          onChange={(e) => 
            setInputs({ ...inputs, robot_id: e.target.value})}
          >
          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key]}</option>))}
        </select>
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