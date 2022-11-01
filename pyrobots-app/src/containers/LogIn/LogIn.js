import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import LogInForm from './components/LogInForm.js' 
import {setToken} from './elements/Auth.js'

const LogIn = () => {
  const navigate = useNavigate();
  const [user, changeUser] = useState({ field: "", valid: null });
  const [password, changePassword] = useState({ field: "", valid: null });
  const [validForm, changeValidForm] = useState({valid: null });
  const [alertForm, changeAlertForm] = useState({field: "" });
  

  const onSubmit_newLog = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"},
      body: JSON.stringify(
        `grant_type=&username=${user.field}&password=${password.field}&scope=&client_id=&client_secret=` 
      )})
      const data = await response.json();
      if(response.ok){
        setToken(data.access_token)
        changeValidForm(true);
        setTimeout(() => {
          navigate('/home')
        }, 4000);
      }
      else{
        if(data.detail == "This username does not exist"){
          changeValidForm(false);
          changeAlertForm("Este nombre de usuario es inexistente");
        }

        if(data.detail == "Incorrect username or password"){
          changeValidForm(false);
          changeAlertForm("La contraseña o el usuario son incorrectos");
        }
        
        if(data.detail == "The user is not confirmed"){
          changeValidForm(false);
          changeAlertForm("El usuario no está confirmado");
        }
      }
    } catch(e) {
      alert(e);
    }
  };

  return(
    <LogInForm onSubmit = {onSubmit_newLog}
    user = {user}
    changeUser = {changeUser}
    password = {password}
    changePassword = {changePassword}  
    validForm = {validForm}
    alertForm = {alertForm}          
    />
  )
};

export default LogIn;

