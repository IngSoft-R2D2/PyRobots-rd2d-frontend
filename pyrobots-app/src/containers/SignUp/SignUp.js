import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import SignUpForm from './components/SignUpForm.js' 

const SignUp = () => {
  const navigate = useNavigate();
  const [user, changeUser] = useState({ field: "", valid: null });
  const [password, changePassword] = useState({ field: "", valid: null });
  const [password2, changePassword2] = useState({ field: "", valid: null });
  const [email, changeEmail] = useState({ field: "", valid: null });
  const [avatar, changeAvatar] = useState({ field: "", valid: null });
  const [validForm, changeValidForm] = useState({valid: null });
  const [alertForm, changeAlertForm] = useState({field: "" });
  
  const onSubmit_newUser = async(e) => {
    e.preventDefault();

    try{
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username : user.field,
          password : password.field,
          email : email.field,
          avatar : avatar.myFile
        })
      })
      if(response.ok){
        alert("Usuario registrado exitosamente");
        changeValidForm(true);
        changeAlertForm("Disfruta de PyRobots");
        setTimeout(() => {
          navigate('/home')
        }, 4000);
      }
      else{
        if (response.status === 409){
          alert("El email y el usuario deben ser unicos");
          changeValidForm(false);
          changeAlertForm("El email y el usuario deben ser unicos");
        }
  
        if (response.status === 422){
          alert("La contrasena no cumple con los requerimientos");
          changeValidForm(false);
          changeAlertForm("La contrasena no cumple con los requerimientos");
        }
  
      }
      
    }
    catch(error) {
      
      alert(error);
    }
    
  }

  return(
    <SignUpForm onSubmit = {onSubmit_newUser}
    user = {user}
    changeUser = {changeUser}
    password = {password}
    changePassword = {changePassword}       
    password2 = {password2}
    changePassword2 = {changePassword2}     
    email = {email}
    changeEmail = {changeEmail}
    avatar = {avatar}
    changeAvatar = {changeAvatar}  
    validForm = {validForm}
    changeValidForm = {changeValidForm}
    alertForm = {alertForm}
    />
  )
};

export default SignUp;