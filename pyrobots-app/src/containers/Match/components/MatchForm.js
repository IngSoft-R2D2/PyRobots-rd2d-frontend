import "../Match.css";
import {
  Form,
  ButtonContainer,
  Button,
  SuccessMessage,
  ErrorMessage,
  Label,
  Select
} from "../elements/Forms.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from "../elements/Input.js";

const MatchForm= (props) => {
    const name = props.name;
    const changeName = props.changeName;
    const minPlayers = props.minPlayers;
    const changeMinPlayers = props.changeMinPlayers;
    const maxPlayers = props.maxPlayers;
    const changeMaxPlayers = props.changeMaxPlayers;
    const games = props.games;
    const changeGames = props.changeGames;
    const rounds = props.rounds;
    const changeRounds = props.changeRounds;
    const robotID = props.robot_id;
    const changeRobotID = props.changeRobotID;
    const password = props.password;
    const changePassword = props.changePassword;
    const robots = props.robots;  
    const validForm = props.validForm;
    const alertForm = props.alertForm;

  return(
    <main>
      <Form className="App" onSubmit={(event) => props.onSubmit(event)}>
        <h1>Crear partida</h1>
        <Input
          state={name}
          changeState={changeName}
          type="text"
          label="Nombre"
          placeholder="Partida"
          name="name"
          obligatory="true"
        />
         <Input
          state={password}
          changeState={changePassword}
          type="password"
          label="Contraseña (opcional)"
          name="pwd"
          obligatory="false"
        /> 
        <Label>Robot</Label>
        <Select 
          required
          type="number" 
          name = "robot"
          onChange={(e) => 
            changeRobotID({ ...robotID, robotID: e.target.value})}
          >
          <option value = {''}> Seleccione un robot </option>

          {Object.keys(robots).map((key)=>
          (<option key = {key} value={key}>{robots[key].name}</option>))}
        </Select>
        <Input 
          required min="2" max="4"
          state={minPlayers}
          changeState={changeMinPlayers}
          type="number"
          label="Mínima cantidad de jugadores"
          name="min"
          obligatory="true"
        />
        <Input
          min={maxPlayers} 
          max="4"
          state={maxPlayers}
          changeState={changeMaxPlayers}
          type="number"
          label="Máxima cantidad de jugadores"
          name="max"
          obligatory="true"
        />
        <Input
          min="1" max="200"
          state={games}
          changeState={changeGames}
          type="number"
          label="Cantidad de juegos"
          name="games"
          obligatory="true"
        />
        <Input
          min="1" max="10000"
          state={rounds}
          changeState={changeRounds}
          type="number"
          label="Cantidad de rondas"
          name="rounds"
          obligatory="true"
        />
        
        {validForm === false && <ErrorMessage>
					<p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error: </b>
            {alertForm}
					</p>
          </ErrorMessage>}
          <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>

        {validForm === true && <SuccessMessage>{alertForm}</SuccessMessage>}
      </Form>
    </main>
  );
};

export default MatchForm;