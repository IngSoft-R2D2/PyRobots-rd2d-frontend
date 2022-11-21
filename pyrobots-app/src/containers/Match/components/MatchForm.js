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
} from "../elements/Forms.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

    const navigate = useNavigate();

    const goToHome= async() => {
        navigate("/home");
    }
  
    const goToMatchesList = async() => {
      navigate("/listmatches");
    }
  return[

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
    <AppBar position="fixed" sx={{ background: 'dark-blue' }} 
        key = {0} >
            <Toolbar style={{display:'flex', justifyContent:"space-between", width:'100%'}}>    
                <Box display='flex' flexGrow={1}>
                    <SmartToyIcon sx={{ fontSize: "80px" }} />
                    <Typography variant="h3" 
                                component="div" 
                                style={{fontWeight: "700",
                                fontFamily: "Roboto",
                                padding: "18px 36px"}} >
                    PyRobots
                    </Typography>
                </Box>  
                <ButtonGroup variant="secondary" aria-label="outlined primary button group">
                  <Button 
                        style={{
                            color: "#fff",
                            fontSize: "22px"
                        }}
                        size="medium"
                        variant="secondary"   
                        startIcon={<FormatListBulletedIcon  sx={{ fontSize: "large" }} /> }
                        onClick={goToMatchesList}>
                        Ver partidas
                    </Button>
                    <Button 
                        style={{
                            color: "#fff",
                            fontSize: "22px"
                        }}
                        variant="secondary" 
                        startIcon={<HomeIcon  sx={{ fontSize: "large" }} /> } 
                        onClick={goToHome} 
                        sx={{ marginLeft: "auto"}}>
                        Menú
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>,
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
    ];
};

export default MatchForm;