import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import MatchForm from "./components/MatchForm.js";
import BotForm from "./components/BotForm.js";
import Board from "./components/Board.js";
//importar registro y login

import Home from "./navigate/Home.js"
import Root from "./navigate/Root.js"

function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}/>
          {/* <Route path="/users" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/> */}

          <Route path="/home" element={<Home />}/>
          <Route path="/matches/" element={<MatchForm />}/>
          <Route path="/robots/" element={<BotForm />}/>
          <Route path="/board/" element={<Board />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
