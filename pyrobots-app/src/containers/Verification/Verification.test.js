import { render, screen,  within, act} from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';
import Verification from "./Verification.js";

beforeEach(() => {
    render(
        <Router> 
            <Verification/>
        </Router> 
    );
  });

describe("Componente de verificación de email", () => {

    test("Renderiza el título", () => {
        const bannerTitle = screen.getByRole('banner');
        within(bannerTitle).getByText(/pyrobots/i);
        expect(bannerTitle).toBeInTheDocument();     
    });

    test("Renderiza el banner", () => {
        const banner = screen.getByRole('banner');  
        expect(banner).toBeInTheDocument();     
    });

    test("Renderiza el alert", () => {
        const alert = screen.getByRole('alert');  
        expect(alert).toBeInTheDocument();   
        const p1 = screen.getByText(/verificación exitosa/i);  
        expect(p1).toBeInTheDocument();   
        const p2 = screen.getByText(/tu email ha sido verificado —/i);  
        expect(p2).toBeInTheDocument();   
        const p3 = screen.getByText(/ya podés loguearte y jugar pyrobots!/i) ;   
        expect(p3).toBeInTheDocument();   
    });
    
    test("El botón de login está en el componente", () => {
        const buttonLogin = screen.getByRole('button', {  name: /login/i});  
        expect(buttonLogin).toBeInTheDocument();     
    });
    
});