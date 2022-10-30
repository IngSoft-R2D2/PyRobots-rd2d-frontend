import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import SignUpForm from './components/SignUpForm.js' 

const SignUp = () => {
  const navigate = useNavigate();
  const [user, changeUser] = useState({ field: "", valid: null });
  const [password, changePassword] = useState({ field: "", valid: null });
  const [password2, changePassword2] = useState({ field: "", valid: null });
  const [email, changeEmail] = useState({ field: "", valid: null });
  const [avatar, changeAvatar] = useState({ field: "", valid: null });

  const onSubmit_newUser = async(e) => {
    e.preventDefault();

      await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username : user.field,
        password : password.field,
        email : email.field,
        avatar : avatar.myFile
      })
    })

      /*if (!response.ok){
        alert("Todo mal");
      }
      else{
        navigate("/")
      }
    } catch(error) {
      alert(error.status)
    }*/
    
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
    />
  )
};

export default SignUp;