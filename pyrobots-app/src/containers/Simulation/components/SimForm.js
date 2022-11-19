import {
  Form,
  ButtonContainer,
  Button,
  SuccessMessage,
  ErrorMessage
} from "../elements/Forms.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const SimForm= (props) => {

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
    <main>
      <Form className="App" onSubmit={(event) => props.onSubmit(event)}>
        <h1>Crear simulación</h1>
        <h4> seleccionar en orden</h4>
        <p><label> robot 1:
        <select 
          required
          type="number" 
          name = "robot"
          onChange={(e) => 
            setInputs({ ...inputs, robot_id1: e.target.value})}
          >
          <option value = {''}> seleccione un robot </option>
          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key].name}</option>))}
        </select>
        </label></p>

        <p><label> robot 2:
        <select 
          required
          type="number" 
          name = "robot"
          onChange={(e) => 
            setInputs({ ...inputs, robot_id2: e.target.value})}
          >
          <option value = {''}> seleccione un robot </option>
          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key].name}</option>))}
        </select>
        </label></p>

        <p><label> robot 3 (opcional):
        <select 
          type="number" 
          name = "robot"
          onChange={(e) => 
            setInputs({ ...inputs, robot_id3: e.target.value})}
          >
          <option value = {''}> seleccione un robot </option>
          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key].name}</option>))}
        </select>
        </label></p>

        <p><label> robot 4 (opcional):
        <select 
          type="number" 
          name = "robot"
          onChange={(e) => 
            setInputs({ ...inputs, robot_id4: e.target.value})}
          >
          <option value = {''}> seleccione un robot </option>
          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key].name}</option>))}
        </select>
        </label></p>
        
        <p><label>cantidad de rondas:
        <input 
          required min="1" max="10000"
          type="number" 
          name="rounds"
          value={inputs.rounds}
          onChange={handleChange}
        />
        </label></p>

        {validForm === false && <ErrorMessage>
					<p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error: </b>
            {alertForm}
					</p>
          </ErrorMessage>}
          <ButtonContainer>
          <Button type="submit">Crear</Button>
        </ButtonContainer>

        {validForm === true && <SuccessMessage>{alertForm}</SuccessMessage>}
      </Form>
    </main>
  );
};

export default SimForm;