import { Alert,
  AlertTitle,
  Box } from '@mui/material';
import PyRobotsAppbar from "./components/Appbar.js";

const Verification = () => {

  return (
    <div style={{
      display: "flex",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0
    }}>
      <PyRobotsAppbar></PyRobotsAppbar>
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="10vh"
        key = {1}
        >
          <Alert severity="success"
          sx={{  width: '1200px','& .MuiAlert-message':{textAlign:"center", width:"100%"}, padding: "18px 36px"}}
          style={{fontFamily: "Roboto", fontSize: 25}}>
            <AlertTitle style={{fontFamily: "Roboto", fontSize: 30}}>
              Verificación exitosa
            </AlertTitle>
            Tu email ha sido verificado — <strong>Ya podés loguearte y jugar PyRobots!</strong>
          </Alert>
        </Box>
        </div>
  );
}

export default Verification;