import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const BotForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    avatar: "",
    code: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    var value = event.target.value;
    const allowedAvatarExtensions = /(jpg|jpeg|png|gif)$/i;

    if (name === "code") {
      const filext = getFileExtension(value);
      if (filext !== "py") {
        alert("tipo de archivo inválido");
        value = "";
      }
    } else if (name === "avatar") {
      const filext = getFileExtension(value);
      if (!allowedAvatarExtensions.exec(filext)) {
        alert("tipo de archivo inválido");
        value = "";
      }
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("http://localhost:3000/robots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inputs //o poner inputs.name...?
      })
    });

    await navigate(-1);
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
            {" "}
            avatar:
            <input
              type="file"
              name="avatar"
              id="file"
              value={inputs.avatar}
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

function getFileExtension(filename) {
  return filename.split(".").pop();
}
