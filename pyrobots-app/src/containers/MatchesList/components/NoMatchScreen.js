import { Alert,Button,ButtonGroup,Box } from '@mui/material';
import { AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MatchTable from './match_table.js';
import { Stack } from "@mui/system";

const NoMatchScreen = () => {
    const navigate = useNavigate();
    const goBack= async() => {
        navigate("/home");
    }
    return(
        <Stack>
           <Alert severity="error"
                style={{
                padding: "18px 36px",
                }}>
                <AlertTitle>No se pueden listar tus robots</AlertTitle>
                Para listarlos debes tener al menos un robot
            </Alert> 
        <MatchTable matches = {""}/>
        </Stack>
)};
export default NoMatchScreen;