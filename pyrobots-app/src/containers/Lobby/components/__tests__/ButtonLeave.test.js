import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';
import ButtonLeave from "../ButtonLeave.js";

beforeEach(() => {
    render(
        <Router> 
            <ButtonLeave/>
        </Router> 
    );
  });

describe("Componente de abandonar partida", () => {

    test("El botón de abandonar partida está en el componente", () => {
        const buttonLeave = screen.getByRole('button', {  name: /abandonar partida/i});  
        expect(buttonLeave).toBeInTheDocument();     
    });
    
});
