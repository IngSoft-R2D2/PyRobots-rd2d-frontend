import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import './SignUp.css';
import {
  Form,
  ButtonContainer,
  Button
} from "../elements/Forms.js";
import Input from "./Input";
import InputFile from "./InputFile";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, changeUser] = useState({ field: "", valid: null });
  const [password, changePassword] = useState({ field: "", valid: null });
  const [password2, changePassword2] = useState({ field: "", valid: null });
  const [email, changeEmail] = useState({ field: "", valid: null });
  const [avatar, changeAvatar] = useState({ field: "", myFile: "", valid: null });
  const expressions = {
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_-]).{8,}$/, 
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    avatar: /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
  };

  const validatePassword2 = () => {
    if (password.field.length > 0) {
      if (password.field !== password2.field) {
        changePassword2((prevState) => {
          return { ...prevState, valid: "false" };
        });
      } else {
        changePassword2((prevState) => {
          return { ...prevState, valid: "true" };
        });
      }
    }
  };

  const onSubmit = async(e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username : user.field,
        password : password.field,
        email : email.field,
        avatar : avatar.myFile
      })
    })

    .then(navigate("/session/"))
    
    .catch(function (error) {
      alert(error);
    });

  };

  return (
    <main>
      <h1>Hola!</h1>
      <h2>Registrate en PyRobots</h2>
      <Form action="" onSubmit={onSubmit}>
        <Input
          state={user}
          changeState={changeUser}
          type="text"
          label="Usuario"
          placeholder="username"
          name="user"
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
        <Input
          state={password2}
          changeState={changePassword2}
          type="password"
          label="Repetir contraseña"
          name="password2"
          errorText="Ambas contraseñas deben ser iguales."
          Inputfunction={validatePassword2}
          obligatory="true"
        />
        <Input
          state={email}
          changeState={changeEmail}
          type="email"
          label="Correo electrónico"
          placeholder="Email@Email.com"
          name="email"
          errorText="El email solo puede contener letras, numeros, puntos, guiones y guion bajo."
          regularExpression={expressions.email}
          obligatory="true"
        />

        <InputFile
          state={avatar}
          changeState={changeAvatar}
          type="file"
          label="Avatar"
          name="avatar"
          errorText="El avatar debe ser una imagen."
          regularExpression={expressions.avatar}
          obligatory="false"
        />
        
        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
         
      </Form>
    </main>
  );
};

export default SignUp;