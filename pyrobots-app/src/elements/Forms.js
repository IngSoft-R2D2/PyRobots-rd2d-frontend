import styled, { css } from "styled-components";

const Colors= {
  border: "#0075FF",
  error: "#bb2929",
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
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  &:focus {
    border: 3px solid ${Colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.valid === "true" &&
    css`
      border: 3px solid transparent;
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
    `}
`;

const ErrorText = styled.p`
  font-size: 12px;
  margin-bottom: 0;
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

const Button = styled.button`
  height: 45px;
  line-height: 45px;
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

export {
  Form,
  Label,
  InputGroup,
  Input,
  ErrorText,
  ButtonContainer,
  Button
};