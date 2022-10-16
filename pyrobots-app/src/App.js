import './App.css';
import './components/Board.css';
import Board from './components/Board.js'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

function App() {
  return (
      <div className="Board" id="Board">
        <BrowserRouter>
          <Routes>
            <Route path="/"/>
            <Route path="/board/" element={<Board />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
