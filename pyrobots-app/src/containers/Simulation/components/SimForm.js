import {
  Form,
  Input,
  Label,
  Select,
  ButtonContainer,
  StyledButton,
  SuccessMessage,
  ErrorMessage
} from "../../Commons/Forms.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PyRobotsAppbar from "./Appbar.js";

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
      <h1 style={{fontFamily: "Roboto", marginTop: 120,  marginRight: 18 }}>Creá una simulación</h1>
      <h2 style={{fontFamily: "Roboto",  marginRight: 18 }}> Por favor, seleccioná en orden</h2>
      <Form className="App" onSubmit={(event) => props.onSubmit(event)}>
        <Label> Robot 1</Label>
        <Select 
          required
          type="number" 
          name = "robot"
          onChange={(e) => 
            setInputs({ ...inputs, robot_id1: e.target.value})}
          >
          <option value = {''}> seleccione un robot </option>
          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key].name}</option>))}
        </Select>
        
        <Label> Robot 2 </Label>
        <Select 
          required
          type="number" 
          name = "robot"
          onChange={(e) => 
            setInputs({ ...inputs, robot_id2: e.target.value})}
          >
          <option value = {''}> seleccione un robot </option>
          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key].name}</option>))}
        </Select>

        <Label> Robot 3 (opcional)</Label>
        <Select 
          type="number" 
          name = "robot"
          onChange={(e) => 
            setInputs({ ...inputs, robot_id3: e.target.value})}
          >
          <option value = {''}> seleccione un robot </option>
          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key].name}</option>))}
        </Select>

        <Label> Robot 4 (opcional)</Label>
        <Select 
          type="number" 
          name = "robot"
          onChange={(e) => 
            setInputs({ ...inputs, robot_id4: e.target.value})}
          >
          <option value = {''}> seleccione un robot </option>
          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key].name}</option>))}
        </Select>
        
        <Label> Cantidad de rondas</Label>
        <Input 
          required min="1" max="10000"
          type="number" 
          name="rounds"
          value={inputs.rounds}
          onChange={handleChange}
        />

        {validForm === false && <ErrorMessage>
					<p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error: </b>
            {alertForm}
					</p>
          </ErrorMessage>}
          <ButtonContainer>
          <StyledButton type="submit">Crear</StyledButton>
        </ButtonContainer>

        {validForm === true && <SuccessMessage>{alertForm}</SuccessMessage>}
      </Form>
    </main>
    </div>
  );
};

export default SimForm;