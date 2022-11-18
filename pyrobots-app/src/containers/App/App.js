import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import { RequireToken } from './elements/Auth.js';
import LogIn from "../LogIn/LogIn.js";
import SignUp from "../SignUp/SignUp.js";
import Match from "../Match/Match.js";
import Bot from "../Bot/Bot.js";
import Home from "../Navigate/Home.js"
import Root from "../Navigate/Root.js"
import Simulation from "../Simulation/Simulation.js"
import Verification from "../Verification/Verification.js"
import BotList from '../RobotList/BotList';
import MatchesList from '../MatchesList/MatchesList.js';
import MyMatches from '../MyMatches/MyMatches.js';
import SimScreen from '../Board/SimScreen.js';

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
          <Route path="/board/" element={<RequireToken><SimScreen /></RequireToken>}/>
          <Route path="/simulation/" element={<RequireToken><Simulation /></RequireToken>}/>
          <Route path="/listrobots/" element={<RequireToken><BotList /></RequireToken>}/>
          <Route path="/listmatches/" element={<RequireToken><MatchesList /></RequireToken>}/>
          <Route path="/mymatches/" element={<RequireToken><MyMatches/></RequireToken>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

