import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import MatchForm from "./components/MatchForm.js";

function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route path="/matches/" element={<MatchForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
