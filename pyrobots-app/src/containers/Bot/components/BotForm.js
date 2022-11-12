//import "../Bot.css";
//import Button from '@mui/material/Button';
import { Stack } from "@mui/system";
import Box from '@mui/material/Box';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Avatar, IconButton, Button, Typography, TextField } from '@mui/material';

const BotForm = (props) => {
  
  const inputs = props.inputs;
  const setInputs = props.setInputs; 

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
    }
    else if (name === "code"){
        const file = event.target.files[0];
        setInputs((values) => ({ ...values, codefile: file}));
    }
  };

  return [
    <div>
      <Box
      sx={{
        width: 400,
        height: 500,
        backgroundColor: "#ffa",
      }}
      >
      <form onSubmit={(event) => props.onSubmit(event)}>
        <Typography variant="h2" 
                    style={{fontWeight: "700",
                    fontFamily: "Roboto",
                    padding: "18px 36px"}}>
            Crear Robot
        </Typography>
        <p>
            <TextField
              required
              label= "Nombre"
              type={"text"}
              name="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder = "Nombre"
              variant= "outlined"
              size= "small"
            />
        </p>
        <p>
        <Avatar 
          alt="A" src={inputs.avatar}
          sizes = "large"
          sx= {{left: '45%', width: 50, height: 50}} />

        <IconButton 
          color="primary" 
          aria-label="upload picture" 
          component="label">
          <input 
            type="file"
            hidden
            name="avatar"
            value={inputs.avatar}
            accept = {[".jpg", ".jpeg", ".png", ".gif"]}
            onChange={handleChange} />
          <PhotoCamera />
        </IconButton>
        </p>

        <p>
        <Button
          variant="contained"
          component="label"
        >
          código (.py)
          <input
            type="file"
            hidden
            required
            name="code"
            value={inputs.code}
            accept = ".py"
            onChange={handleChange}
          />
        </Button>
        <Typography variant="h5" 
                    style={{fontWeight: "700",
                    fontFamily: "Roboto",
                    padding: "18px 36px"}}>
            {inputs.code}
        </Typography>
        </p>
        <p>
        <Button 
          type = "submit"
          variant = "contained"
          size= "medium"
        > Crear
        </Button>
        </p>
      </form>
      </Box>
    </div>
  ];
};

export default BotForm;
