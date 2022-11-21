import "../Bot.css";
import {
  Form,
  ButtonContainer,
  StyledButton,
  SuccessMessage,
  ErrorMessage,
  Label,
  Input
} from "../elements/Forms.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PyRobotsAppbar from "./Appbar.js";

const BotForm = (props) => {
  
  const inputs = props.inputs;
  const setInputs = props.setInputs; 
  const validForm = props.validForm;
  const alertForm = props.alertForm;

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));

    if (name === "avatar"){
        const file = event.target.files[0];
        const base64 = await convertToBase64(file);
        setInputs((values) => ({ ...values, avatarb64: base64 }));
    }
    else if (name === "code"){
        const file = event.target.files[0];
        setInputs((values) => ({ ...values, codefile: file}));
    }
  };

  return [
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
    <PyRobotsAppbar></PyRobotsAppbar>,
    <div>
      <h1 style={{fontFamily: "Roboto",  marginTop: 120,marginRight: 20 }}>
        Creá un robot
      </h1>
      <Form onSubmit={(event) => props.onSubmit(event)}>
        <Label >Nombre</Label>
          <Input
            required
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        <Label>Avatar</Label>
            <Input
              type="file"
              name="avatar"
              id="file"
              value={inputs.avatar}
              accept = {[".jpg", ".jpeg", ".png", ".gif"]}
              onChange={handleChange}
            />
        <Label>Código (.py)</Label>
            <Input
              required
              type="file"
              name="code"
              value={inputs.code}
              accept = ".py"
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
    </div>
    </div>
  ];
};

export default BotForm;
