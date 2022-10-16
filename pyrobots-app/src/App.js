import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './components/LogIn.css';
import LogIn from "./components/LogIn.js";
//import {RequireToken} from './components/Auth.js'

function App() {
    return (
        <div className="LogIn" id="LogIn">
          <BrowserRouter>
            <Routes>
              <Route path="/"/>
              <Route path="/login/" element={<LogIn />}/>
            </Routes>
          </BrowserRouter>
        </div>
      );
}

export default App;

