import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import PyRobotsAppbar from "./Appbar.js";
import background from "./img/r2d21.png";

const Root = () => {

  const navigate = useNavigate();

  const goToSignUp = async () => {
    navigate("/users");
  }

  const goToLogin = async () => {
    navigate("/login");
  }

  return (
    <div style={{
      display: "flex",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      backgroundColor:"#4D5656",
      backgroundImage: `url(${background})` 
    }}>
    <PyRobotsAppbar></PyRobotsAppbar>
    <div>
        <Stack
          border="4px"
          borderColor="blue"
          style={{
            height: "100%",
            width: "100%",
            padding: "36px 36px",
            background: "white",
            borderRadius: "10px",
            border: "4px solid #1976d2",
          }}
          spacing={"20px"}
        >
          <Typography variant="h4"
            component="div"
            style={{
              fontWeight: "700",
              fontFamily: "Roboto",
              padding: "30px 36px"
            }}>
            Bienvenide
          </Typography>
            <Button
              style={{
                color: "#fff",
                padding: "18px 36px",
                fontSize: "22px"
              }}
              size="medium"
              variant="contained"
              endIcon={<PersonIcon sx={{ fontSize: "large" }} />}
              sx={{ width: '300px' }}
              onClick={goToSignUp}>Registrarme</Button>
            <Button
              style={{
                color: "#fff",
                padding: "18px 36px",
                fontSize: "22px"
              }}
              size="medium"
              variant="contained"
              endIcon={<LoginIcon sx={{ fontSize: "large" }} />}
              sx={{ width: '300px' }}
              onClick={goToLogin}>Loguearme</Button>
        </Stack>
      </div>
      </div>
  );
};

export default Root;