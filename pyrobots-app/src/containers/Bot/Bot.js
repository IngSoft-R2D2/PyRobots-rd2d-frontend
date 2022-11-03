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
        console.log(result)
        console.log(data)
        if(data.operation_result === "Successfully created."){
            alert("robot creado con éxito")
            navigate("/home");
        }
        else {
            alert(data.detail)
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
               setInputs = {setInputs}/>
    )
}

export default Bot;