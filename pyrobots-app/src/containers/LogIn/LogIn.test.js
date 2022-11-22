import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';
import LogIn from "./LogIn.js";

beforeEach(() => {
    render(
        <Router> 
            <LogIn/>
        </Router> 
    );
  });

describe("Componente formulario de login", () => {
    test("Renderiza el título", () => {
        const title = screen.getByText(/Hola de nuevo!/i);   
        expect(title).toBeInTheDocument();     
    });
    test("El input para ingresar el nombre de usuario está en el componente", () => {
        const inputUsernamePlaceholder = screen.getByPlaceholderText(/username/i);
        expect(inputUsernamePlaceholder).toBeInTheDocument();
        const inputUsername = screen.getByLabelText(/usuario\*/i);
        expect(inputUsername).toBeInTheDocument();
    });
    test("El input para ingresar la contraseña está en el componente", () => {
        const inputForPassword = screen.getByLabelText(/contraseña\*/i);
        expect(inputForPassword).toBeInTheDocument();
    });
    test("El error de contraseña no válida está en el componente", () => {
        const inputError = screen.getByText(  /la contraseña tiene que ser de 8 caracteres como mínimo y contener mayúsculas, minúsculas y números./i  )
        expect(inputError).toBeInTheDocument();
    });
    test("El botón para subir el formulario está en el componente", () => {
        const enviarForm = screen.getByRole('button', {  name: /enviar/i});
        expect(enviarForm).toBeInTheDocument();
    });
});