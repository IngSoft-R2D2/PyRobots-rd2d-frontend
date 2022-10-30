import React from "react";
import '../LogIn.css';
import {
    Form,
    ButtonContainer,
    Button
  } from "../elements/Forms.js";
import Input from "../elements/Input.js";
import {fetchToken} from '../elements/Auth.js';

const LogInForm = (props) => {

    const user = props.user;
    const changeUser = props.changeUser;

    const password = props.password;
    const changePassword = props.changePassword;

    const expressions = {
        password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
    };

    return (
        fetchToken() 
        ? (
        <p>Logueo exitoso!</p>
        ) 
        :(
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
              errorText="La contraseña tiene que ser de 8 caracteres como mínimo."
              regularExpression={expressions.password}
              obligatory="true"
            />
    
            <ButtonContainer>
              <Button type="submit">Enviar</Button>
            </ButtonContainer>
             
          </Form>
        </main>
        )
    );        

};  

export default LogInForm;