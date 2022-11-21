import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';
import ButtonStart from "../ButtonStart.js";

beforeEach(() => {
    render(
        <Router> 
            <ButtonStart/>
        </Router> 
    );
  });

describe("Componente de iniciar partida", () => {

    test("El botón de iniciar partida está en el componente", () => {
        const buttonStart = screen.getByRole('button', {  name: /iniciar/i});  
        expect(buttonStart).toBeInTheDocument();     
    });
    
});