import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Colors= {
  border: "#0075FF",
  error: "#bb2929",
  success: "#1ed12d",
};

const Form = styled.form`
  display: inline-block;
  border: 5px solid #000;
  border-radius: 1em;
  padding: 1em;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background-color: transparent;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  width: 700px
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
  ${(props) =>
    props.valid === "false" &&
    css`
      color: ${Colors.error};
    `}
`;

const InputGroup = styled.div`
  position: relative;
  color: #000
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px solid;
  font-size: 20px;
  color: #000;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid #000;
  &:focus {
    border: 2px solid #000;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.valid === "true" &&
    css`
      background-color: transparent;
      border: 3px solid #000;
    `}
  ${(props) =>
    props.valid === "false" &&
    css`
      border: 3px solid ${Colors.error} !important;
    `}
  ${(props) =>
    props.type === "file" &&
    css`
      background-color: transparent;
      border:transparent;
    `}
`;

const ErrorText = styled.p`
  font-size: 12px;
  margin-bottom: 3;
  color: ${Colors.error};
  display: none;
  ${(props) =>
    props.valid === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valid === "false" &&
    css`
      display: block;
    `}
`;

const ButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const StyledButton = styled.button`
  height: 45px;
  line-height: 10px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;
  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const ValidationIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;
  ${(props) =>
    props.valid === "false" &&
    css`
      opacity: 1;
      color: ${Colors.error};
    `}
  ${(props) =>
    props.valid === "true" &&
    css`
      opacity: 1;
      color: ${Colors.success};
    `}
`;

const SuccessMessage = styled.p`
  height: 45px;
  line-height: 45px;
  background: ${Colors.success};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  } 
  b {
    margin-left: 10px;
  }
	font-size: 20px;
	color: #fff;
`;

const ErrorMessage = styled.div`
  width: 20%,
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 1px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

const Select = styled.select`
    width: 100%;
    background: #fff;
    border-radius: 3px solid;
    color: black;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: 0.3s ease all;
    font-size: 20px;
    border: 3px solid #000;
    &:focus {
        border: 2px solid #000;
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
    option {
        font-family: Roboto, sans-serif;
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0 40px 0 10px;
        position: relative;
    }
`;

export {
  Form,
  Label,
  InputGroup,
  Input,
  ErrorText,
  ButtonContainer,
  StyledButton,
  ValidationIcon,
  SuccessMessage,
  ErrorMessage,
  Select
};