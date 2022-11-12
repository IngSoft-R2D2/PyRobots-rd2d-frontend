import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';
import ButtonJoin from "../ButtonJoin.js";

beforeEach(() => {
    render(
        <Router> 
            <ButtonJoin/>
        </Router> 
    );
  });

describe("Componente de unirse a partida", () => {

    test("El botón de unirse a partida está en el componente", () => {
        const buttonJoin = screen.getByRole('button', {  name: /unirse/i});  
        expect(buttonJoin).toBeInTheDocument();     
    });
    
});