import { BrowserRouter, Route, Routes, } from 'react-router-dom';
//import { RequireToken } from './components/Auth';
import './components/LogIn.css';
import LogIn from "./components/LogIn.js";

function App() {
    return (
        <div className="App" id="App">
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

