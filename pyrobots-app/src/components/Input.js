import React from "react";
import {
  Input,
  Label,
  InputGroup,
  ErrorText
} from "../elements/Forms";

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
      </InputGroup>
      <ErrorText valid={state.valid}>{errorText}</ErrorText>
    </div>
  );
};

export default InputComponent;