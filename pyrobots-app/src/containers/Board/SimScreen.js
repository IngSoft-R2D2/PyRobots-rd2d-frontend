import React from 'react';
import './Board.css';
import { Stack } from "@mui/system";
import Animation from './animation.js';
import PyRobotsAppbar from "./Appbar.js";

const SimScreen = (props) => {
    const json_sim = props.json;

    return (
    <Stack>
      <PyRobotsAppbar></PyRobotsAppbar>
    <Animation
      json = {json_sim}
      />
    </Stack>
    )
}
export default SimScreen;
