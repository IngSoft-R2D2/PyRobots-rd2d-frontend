import React, { useState } from "react";
import SignUpForm from './components/SignUpForm.js' 

const SignUp = () => {
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
      const data = await response.json();
      if(data.operation_result === "Verification code successfully sent to your email"){
        changeValidForm(true);
        changeAlertForm("Se ha enviado un link de verificación a tu email");
      }
      else{
        if (data.detail === "A user with this username already exists"){
          changeValidForm(false);
          changeAlertForm("Ya existe un usuario con este nombre");
        }
  
        if (data.detail === "A user with this email already exists"){
          changeValidForm(false);
          changeAlertForm("Ya existe un usuario con este email");
        }

        if (data.detail === "Invalid password format"){
          changeValidForm(false);
          changeAlertForm("Formato de contraseña inválido");
        }
        
        if (data.detail === "Email address does not exist"){
          changeValidForm(false);
          changeAlertForm("Email inválido");
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
    alertForm = {alertForm}
    />
  )
};

export default SignUp;