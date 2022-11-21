import React from "react";
import {
  Form,
  ButtonContainer,
  Button,
  SuccessMessage,
  ErrorMessage
} from "../../Commons/Forms.js";
import Input from "../../Commons/Input.js";
import InputFile from "../../Commons/InputFile.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const SignUpForm = (props) => {
    
    const user = props.user;
    const changeUser = props.changeUser;

    const password = props.password;
    const changePassword = props.changePassword;

    const password2 = props.password2;
    const changePassword2 = props.changePassword2;

    const email = props.email;
    const changeEmail = props.changeEmail;

    const avatar = props.avatar;
    const changeAvatar = props.changeAvatar;

    const validForm = props.validForm;
    
    const alertForm = props.alertForm;
    
    const expressions = {
      password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 
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

    return (
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
      <PyRobotsAppbar></PyRobotsAppbar>
      <main>
      <h1 style={{fontFamily: "Roboto", marginTop: 120, marginRight: 18 }}>Hola!</h1>
      <h2 style={{fontFamily: "Roboto", marginRight: 18 }}>Registrate en PyRobots</h2>
      <Form action="" onSubmit={(event) => props.onSubmit(event)}>
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
          placeholder="password"
          name="password1"
          errorText="La contraseña tiene que ser de 8 caracteres como mínimo y 
                    contener mayúsculas, minúsculas y números. No se permiten
                    caracteres especiales."
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
        
        {validForm === false && <ErrorMessage>
					<p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error: </b>
            {alertForm}
					</p>
          </ErrorMessage>}
        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
        {validForm === true && <SuccessMessage>Usuario registrado! {alertForm}</SuccessMessage>}
         
      </Form>
    </main>
    </div>
  );    
};  
  
export default SignUpForm;