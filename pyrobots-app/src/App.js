import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './components/SignUp.css';
import SignUp from "./components/SignUp.js";

function App() {
    return (
        <div className="SignUp" id="SignUp">
          <BrowserRouter>
            <Routes>
              <Route path="/"/>
              <Route path="/users/" element={<SignUp />}/>
            </Routes>
          </BrowserRouter>
        </div>
      );
}

export default App;

