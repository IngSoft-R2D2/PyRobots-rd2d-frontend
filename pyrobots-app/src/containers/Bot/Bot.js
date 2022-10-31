import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from './elements/Auth.js';
import BotForm from './components/BotForm.js'

const Bot = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
      name: "",
      avatar: "",
      avatarb64: "",
      code: "",
      codeb64: ""
    });

    const onSubmit_newBot = async (event) => {
      event.preventDefault();
      const token = fetchToken();
      await fetch("http://localhost:8000/robots/", {
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
      <BotForm onSubmit = {onSubmit_newBot}
               inputs = {inputs}
               setInputs = {setInputs}/>
    )
}

export default Bot;