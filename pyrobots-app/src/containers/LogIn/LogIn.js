import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import LogInForm from './components/LogInForm.js' 
import {setToken} from './elements/Auth.js'

const LogIn = () => {
  const navigate = useNavigate();
  const [user, changeUser] = useState({ field: "", valid: null });
  const [password, changePassword] = useState({ field: "", valid: null });

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
      if (response.ok){
        setToken(data.access_token)
        console.log(data.access_token)
        navigate("/home/");
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
    />
  )
};

export default LogIn;

