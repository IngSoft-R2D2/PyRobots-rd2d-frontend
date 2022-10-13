import React, { useState } from "react";
import './SignUp.css';
import {
  Formulario,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError
} from "./Elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Componentes/Input";

const SignUp = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [avatar, cambiarAvatar] = useState({ campo: "", valido: null });
  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]+$/,
    password: /^[a-zA-Z_].{8}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      usuario.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true"
    ) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      cambiarPassword2({ campo: "", valido: "null" });
      cambiarCorreo({ campo: "", valido: null });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <main>
      <h1>Hola!</h1>
      <h2>Registrate en PyRobots</h2>
      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          tipo="text"
          label="Usuario"
          placeholder="username"
          name="usuario"
          leyendaError="El usuario ya existe."
          expresionRegular={expresiones.usuario}
          obligatorio="true"
        />
        <Input
          estado={password}
          cambiarEstado={cambiarPassword}
          tipo="password"
          label="Contraseña"
          name="password1"
          leyendaError="La contraseña tiene que ser de 8 caracteres como mínimo."
          expresionRegular={expresiones.password}
          obligatorio="true"
        />
        <Input
          estado={password2}
          cambiarEstado={cambiarPassword2}
          tipo="password"
          label="Repetir contraseña"
          name="password2"
          leyendaError="Ambas contraseñas deben ser iguales."
          funcion={validarPassword2}
          obligatorio="true"
        />
        <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          label="Correo electrónico"
          placeholder="correo@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.correo}
          obligatorio="true"
        />

        <Input
          estado={avatar}
          cambiarEstado={cambiarAvatar}
          tipo="file"
          label="Avatar"
          name="avatar"
          leyendaError="El avatar debe ser una imagen."
          obligatorio="false"
        />

        {formularioValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true && (
            <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
};

export default SignUp;