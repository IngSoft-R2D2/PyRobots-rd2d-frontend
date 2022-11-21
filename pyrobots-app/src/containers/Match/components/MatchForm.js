import "../Match.css";
import {
  Form,
  ButtonContainer,
  StyledButton,
  SuccessMessage,
  ErrorMessage,
  Label,
  Select,
  Input
} from "../../Commons/Forms.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PyRobotsAppbar from "../elements/Appbar.js";

const MatchForm= (props) => {
    const inputs = props.inputs;
    const setInputs = props.setInputs; 
    const robots = props.robots;  
    const validForm = props.validForm;
    const alertForm = props.alertForm;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

  return(

    <div style={{
      display: "flex",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0
    }}>
    <PyRobotsAppbar></PyRobotsAppbar>
    <main>
      <h1 style={{fontFamily: "Roboto", marginTop: 120, marginRight: 20 }}>
        Creá una partida
      </h1>

      <Form className="App" onSubmit={(event) => props.onSubmit(event)}>
        <Label>Nombre</Label>
        <Input 
            required
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
        />
        
        <Label>Contraseña (opcional)</Label>
        <Input 
            type="password" 
            name="pwd"
            value={inputs.pwd}
            onChange={handleChange}
        />
        <Label>Robot</Label>
        <Select 
            required
            type="number" 
            name = "robot"
            onChange={(e) => 
                setInputs({ ...inputs, robot_id: e.target.value})}
            >
            <option value = {''}> Seleccione un robot </option>

            {Object.keys(robots).map((key)=>
            (<option key = {key} value={key}>{robots[key].name}</option>))}
        </Select>

        <Label>Mínima cantidad de jugadores</Label>
        <Input 
            required min="2" max="4"
            type="number"
            name="min"
            value={inputs.min}
            onChange={handleChange}
        />
        <Label>Máxima cantidad de jugadores</Label>
        <Input 
            required min={inputs.min} max="4"
            type="number"
            name="max"
            value={inputs.max}
            onChange={handleChange}
        />
        <Label>Cantidad de juegos</Label>
        <Input 
            required min="1" max="200"
            type="number"
            name="games"
            value={inputs.games}
            onChange={handleChange}
        />
        <Label>Cantidad de rondas</Label>
        <Input 
            required min="1" max="10000"
            type="number" 
            name="rounds"
            value={inputs.rounds}
            onChange={handleChange}
        />

        <ButtonContainer>
          <StyledButton type="submit">Crear</StyledButton>
        </ButtonContainer>

        {validForm === false && <ErrorMessage>
		    <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error: </b>
            {alertForm}
			  </p>
          </ErrorMessage>}
        {validForm === true && <SuccessMessage>{alertForm}</SuccessMessage>}
      </Form>
      </main>
      </div>
    );
};

export default MatchForm;