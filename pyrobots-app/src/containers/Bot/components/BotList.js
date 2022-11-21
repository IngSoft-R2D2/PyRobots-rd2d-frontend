import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const BotList = ({ robots, robot, setRobot }) => {

  return (
    <div>
      <InputLabel
        id="robot-label">Robot</InputLabel>
      <Select
        required
        labelId="robot-label"
        id="multiple-robots"
        value={robot.robot_id}
        type="number"
        name="robot"
        style={{
          outline: 'none',
          width: '300px',
          borderRadius:'10px'
        }}
        onChange={(e) =>
          setRobot({ ...robot, robot_id: e.target.value })}
      >
        {
          Object.keys(robots).map((key) => (
            <MenuItem key={key} value={key}>
              {robots[key].name}
            </MenuItem>
          ))
        }
      </Select>
    </div>
  )
}

export default BotList;