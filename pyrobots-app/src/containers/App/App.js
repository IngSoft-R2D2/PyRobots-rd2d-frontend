import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import { RequireToken } from './elements/Auth.js';
import LogIn from "../LogIn/LogIn.js";
import SignUp from "../SignUp/SignUp.js";
import Match from "../Match/Match.js";
import Bot from "../Bot/Bot.js";
import Board from "../Board/Board.js";
import Home from "../Navigate/Home.js"
import Root from "../Navigate/Root.js"

function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}/>
          <Route path="/users" element={<SignUp />}/>
          <Route path="/login" element={<LogIn />}/>
          <Route path="/home" element={<RequireToken><Home /></RequireToken>}/>
          <Route path="/matches/" element={<RequireToken><Match /></RequireToken>}/>
          <Route path="/robots/" element={<RequireToken><Bot /></RequireToken>}/>
          <Route path="/board/" element={<RequireToken><Board /></RequireToken>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

