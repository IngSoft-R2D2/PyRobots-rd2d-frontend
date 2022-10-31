import React from "react";
import '../LogIn.css';
import {
    Form,
    ButtonContainer,
    Button,
    MensajeExito,
    MensajeError
  } from "../elements/Forms.js";
import Input from "../elements/Input.js";

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

    return (
        <main>
          <h1>Hola de nuevo!</h1>
          <h2>Iniciá sesión en PyRobots </h2>
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

             
            {validForm === false && <MensajeError>
					  <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error: </b>
            {props.alertForm}
					  </p>
           </MensajeError>}
    
            <ButtonContainer>
              <Button type="submit">Enviar</Button>
            </ButtonContainer>

            {validForm === true && <MensajeExito> 
             Hola de nuevo, {user.field}
           </MensajeExito>}
             
          </Form>
        </main>
        
    );        

};  

export default LogInForm;