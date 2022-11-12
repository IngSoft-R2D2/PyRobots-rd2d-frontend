import Typography from '@mui/material/Typography';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Results = (props) => {
    return (
    <div>
      <Typography variant="h3" gutterBottom>
        Partida Terminada
      </Typography>
      <Typography variant="h4" gutterBottom>
        {`Ganador/es: `}
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "lightblue" }}>
        {props.results.map((value) => (
          <ListItem
            sx={{
              color: "white"
            }}
            key={value}
          >
            <ListItemText primary={`jugador ${value}`} />
          </ListItem>
        ))}
      </List>
    </div>
    )
}

export default Results;