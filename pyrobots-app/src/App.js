import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import { RequireToken } from './components/Auth';
import LogIn from "./components/LogIn.js";
import SignUp from "./components/SignUp.js";
import MatchForm from "./components/MatchForm.js";
import BotForm from "./components/BotForm.js";
import Board from "./components/Board.js";

function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route path="/users/" element={<SignUp />}/>
          <Route path="/login/" element={<LogIn />}/>
          <Route path="/matches/" element={<MatchForm />}/>
          <Route path="/robots/" element={<BotForm />}/>
          <Route path="/board/" element={<Board />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

