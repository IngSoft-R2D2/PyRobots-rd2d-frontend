import React from "react";
import {
  Input,
  Label,
  InputGroup,
  ErrorText,
  ValidationIcon
} from "../elements/Forms";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

const InputComponent = ({
  state,
  changeState,
  type,
  label,
  placeholder,
  name,
  errorText,
  regularExpression,
  Inputfunction,
  obligatory
}) => {

  const onChange = (e) => {
    changeState({ ...state, field: e.target.value });

  };  

  const validation = () => {
    if (regularExpression) {
      if (regularExpression.test(state.field)) {
        changeState({ ...state, valid: "true" });
      } else {
        changeState({ ...state, valid: "false" });
      }
    }

    if (Inputfunction) {
      Inputfunction();
    }
  };

  return (
    <div>
      <Label htmlFor={name} valid={state.valid}>
        {label}
        {obligatory === "true" && <abbr title="requiered">*</abbr>}
      </Label>
      <InputGroup>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          value={state.field}
          onChange={onChange}
          onKeyUp={validation}
          onBlur={validation}
          valid={state.valid}
          obligatory={obligatory}
        />
        <ValidationIcon
          icon={state.valid === "true" ? faCheckCircle : faTimesCircle}
          valid={state.valid}
        />
      </InputGroup>
      <ErrorText valid={state.valid}>{errorText}</ErrorText>
    </div>
  );
};

export default InputComponent;