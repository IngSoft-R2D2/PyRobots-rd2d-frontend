import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import { RequireToken } from './elements/Auth.js';
import LogIn from "../LogIn/LogIn.js";
import SignUp from "../SignUp/SignUp.js";
import Match from "../Match/Match.js";
import Lobby from "../Lobby/Loby.js"
import Bot from "../Bot/Bot.js";
import BotSelect from "../Bot/BotSelect.js"
import Home from "../Navigate/Home.js"
import Root from "../Navigate/Root.js"
import Simulation from "../Simulation/Simulation.js"
import Verification from "../Verification/Verification.js"
import BotList from '../RobotList/BotList';
import MatchesList from '../MatchesList/MatchesList.js';
import MatchesHistory from '../MatchesHistory/MatchesHistory.js';



function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}/>
          <Route path="/users" element={<SignUp />}/>
          <Route path="/users/verified" element={<Verification />}/>
          <Route path="/login" element={<LogIn />}/>
          <Route path="/home" element={<RequireToken><Home /></RequireToken>}/>
          <Route path="/matches/" element={<RequireToken><Match /></RequireToken>}/>
          <Route path="/robots/" element={<RequireToken><Bot /></RequireToken>}/>
          <Route path="/listmatches/select" element={<RequireToken><BotSelect /></RequireToken>}/>
          <Route path="/simulation/" element={<RequireToken><Simulation /></RequireToken>}/>
          <Route path="/listrobots/" element={<RequireToken><BotList /></RequireToken>}/>
          <Route path="/listmatches/" element={<RequireToken><MatchesList /></RequireToken>}/>
          <Route path="/listmatches/lobby/:match_id" element={<RequireToken><Lobby /></RequireToken>}/>
          <Route path="/history/" element={<RequireToken><MatchesHistory /></RequireToken>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

