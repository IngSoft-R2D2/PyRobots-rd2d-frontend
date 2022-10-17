import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import './LogIn.css';
import {setToken, fetchToken} from './Auth.js'
import {
  Form,
  ButtonContainer,
  Button
} from "../elements/Forms.js";
import Input from "./Input";

const LogIn = () => {
  const navigate = useNavigate();
  const [user, changeUser] = useState({ field: "", valid: null });
  const [password, changePassword] = useState({ field: "", valid: null });
  const expressions = {
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"},
      body: JSON.stringify(
        // username : user.field,
        // password : password.field
        `grant_type=&username=${user.field}&password=${password.field}&scope=&client_id=&client_secret=` 
      )})
      const data = await response.json();
      if (response.ok){
        setToken(data.access_token)
        console.log(data.access_token)
        navigate("/home/");
      }
    } catch(e) {
      alert(e);
    }
    if (
      user.valid === "true" &&
      password.valid === "true" 
    ) {
      changeUser({ field: "", valid: "" });
      changePassword({ field: "", valid: null });
    } 
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
      <Form action="" onSubmit={onSubmit}>
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

export default LogIn;

