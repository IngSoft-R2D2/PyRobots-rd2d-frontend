import React from "react";
import {
  Input,
  Label,
  GrupoInput,
  LeyendaError,
  IconoValidacion
} from "./../Elementos/Formularios";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

const ComponenteInput = ({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  leyendaError,
  expresionRegular,
  funcion,
  obligatorio
}) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }

    if (funcion) {
      funcion();
    }
  };

  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>
        {label}
        {obligatorio === "true" && <abbr title="requiered">*</abbr>}
      </Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
          obligatorio={obligatorio}
        />
        <IconoValidacion
          icon={estado.valido === "true" ? faCheckCircle : faTimesCircle}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};

export default ComponenteInput;