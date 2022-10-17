import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchToken } from './Auth.js';
import "../App.css";

const BotForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    avatar: "",
    avatarb64: "",
    code: "",
    codeb64: ""
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));

    if (name === "avatar"){
        const file = event.target.files[0];
        const base64 = await convertToBase64(file);
        setInputs((values) => ({ ...values, avatarb64: base64 }));
    } else if (name === "code"){
        const file = event.target.files[0];
        const base64 = await convertToBase64(file);
        setInputs((values) => ({ ...values, codeb64: base64 }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = fetchToken();

    await fetch("http://localhost:8000/robots", {
      method: "POST",
      headers: { 'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
      body: JSON.stringify({
        name: inputs.name,
        avatar: inputs.avatarb64,
        behaviour_file: inputs.codeb64
      })
    })
    .catch(function (error) {
        console.log(error, 'error')
        alert(error);
    });

    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Crear Robot</h1>
        <p>
          <label>
            nombre:
            <input
              required
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            avatar:
            <input
              type="file"
              name="avatar"
              id="file"
              value={inputs.avatar}
              accept = {[".jpg", ".jpeg", ".png", ".gif"]}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            código: (.py)
            <input
              required
              type="file"
              name="code"
              value={inputs.code}
              accept = ".py"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <input type="submit"></input>
        </p>
      </form>
    </div>
  );
};

export default BotForm;

