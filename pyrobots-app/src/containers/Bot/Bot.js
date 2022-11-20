import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from './elements/Auth.js';
import BotForm from './components/BotForm.js'

const Bot = () => {
    const navigate = useNavigate();
    const [validForm, changeValidForm] = useState({valid: null });
    const [alertForm, changeAlertForm] = useState("");

    const [inputs, setInputs] = useState({
      name: "",
      avatar: "",
      avatarb64: "",
      code: "",
      codefile: null
    });


    const onSubmit_newBot = async (event) => {
      event.preventDefault();
      const token = fetchToken();

      console.log(inputs.codefile);

      const botCode = new FormData();
      botCode.append(
        "behaviour_file",
        inputs.codefile,
        inputs.codefile.name
      );

      console.log(botCode);

      try{
        const result = await fetch(`http://localhost:8000/robots/?name=${inputs.name}&avatar=${inputs.avatarb64}`,
        {
            method: "POST",
            headers: { /*'accept': 'application/json',*/
                       'Authorization': `Bearer ${token}`},
            body: botCode
        })
        const data = await result.json();
        if(data.operation_result === "Successfully created."){
          changeValidForm(true);
          changeAlertForm("Robot creado exitosamente");
          setTimeout(() => {
            navigate('/home')
            }, 5000);
        }
        else {
          changeValidForm(false);
            if (data.detail === "This user has a robot with this name already."){
                changeAlertForm("Ya creaste un robot con este nombre!");
            }
            if (data.detail === "This user has a robot with this filename already."){
                changeAlertForm("Ya creaste un robot con este archivo!");
            }

        }
      }
      catch(error) {
          console.log(error)
          alert(error);
      };
    };

    return (
      <BotForm onSubmit = {onSubmit_newBot}
               inputs = {inputs}
               setInputs = {setInputs}
               validForm = {validForm}
               alertForm = {alertForm}
               />
    )
}

export default Bot;