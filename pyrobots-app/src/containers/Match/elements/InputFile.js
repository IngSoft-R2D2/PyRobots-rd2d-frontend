import React from "react";
import {
  Input,
  Label,
  InputGroup,
  ErrorText
} from "./Forms";

const InputFileComponent = ({
  state,
  changeState,
  type,
  label,
  name,
  errorText,
  regularExpression,
  Inputfunction,
  obligatory
}) => {

  function convertBase64(file){
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file)
			fileReader.onload = () => {
				resolve(fileReader.result);
			}
			fileReader.onerror = (error) => {
				reject(error);
			}
		})
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

  const handleFileRead = async(event) => {
		changeState(previousInputs => ({ ...previousInputs, field: event.target.value}))
		const file = event.target.files[0]
		var base64 = await convertBase64(file)
    changeState(previousInputs => ({ ...previousInputs, myFile: base64 }))
		console.log(base64)
  };

  return (
    <div>
      <Label htmlFor={name} valid={state.valid}>
        {label}
      </Label>
      <InputGroup>
        <Input
          type={type}
          id={name}
          value={state.field}
          onChange={handleFileRead}
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

export default InputFileComponent;