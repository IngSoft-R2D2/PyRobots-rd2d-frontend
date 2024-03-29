import React from "react";
import '../LogIn.css';
import {
    Form,
    ButtonContainer,
    StyledButton,
    SuccessMessage,
    ErrorMessage
  } from "../../Commons/Forms.js";
import PyRobotsAppbar from "./Appbar.js";
import Input from "../../Commons/Input.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const LogInForm = (props) => {

    const user = props.user;
    const changeUser = props.changeUser;

    const password = props.password;
    const changePassword = props.changePassword;

    const validForm = props.validForm;
    
    const alertForm = props.alertForm;

    const expressions = {
        password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
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
        <main>
          <h1 style={{fontFamily: "Roboto", marginTop: 120, marginRight: 18 }}>Hola de nuevo!</h1>
          <h2 style={{fontFamily: "Roboto", marginRight: 18 }}>Iniciá sesión en PyRobots </h2>
          <Form action="" onSubmit={(event) => props.onSubmit(event)}>
            <Input
              state={user}
              changeState={changeUser}
              type="text"
              label="Usuario"
              placeholder="username"
              name="user"
              errorText="El user ya existe."
              obligatory="true"
            />
            <Input
              state={password}
              changeState={changePassword}
              type="password"
              label="Contraseña"
              name="password1"
              errorText="La contraseña tiene que ser de 8 caracteres como mínimo y 
                        contener mayúsculas, minúsculas y números."
              regularExpression={expressions.password}
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
              <StyledButton type="submit">Enviar</StyledButton>
            </ButtonContainer>

            {validForm === true && <SuccessMessage> 
             Hola de nuevo, {user.field}
           </SuccessMessage>}
             
          </Form>
        </main>
        
        </div>
  ];        

};  

export default LogInForm;