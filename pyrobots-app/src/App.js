import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import BotForm from "./components/BotForm.js";

function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route path="/robots/" element={<BotForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
