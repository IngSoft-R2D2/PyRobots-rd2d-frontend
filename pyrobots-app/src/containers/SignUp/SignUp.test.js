import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router} from 'react-router-dom';
import SignUp from "./SignUp.js";

beforeEach(() => {
    render(
        <Router> 
            <SignUp/>
        </Router> 
    );
});

describe("Validación de campos", () => {
    test("Un nombre de usuario vacío no es valido", () => {
        const inputUsernamePlaceholder = screen.getByPlaceholderText(/username/i);
        expect(inputUsernamePlaceholder).toBeInvalid();
    });

    test("Una contraseña vacía no es valida", () => {
        const inputForPasswordPlaceholder = screen.getByPlaceholderText(/password/i);
        expect(inputForPasswordPlaceholder).toBeInvalid();
    });

    test("Se acepta un email válido", () => {
        const inputForEmail = screen.getByLabelText(/correo electrónico\*/i);
        userEvent.type(inputForEmail, "correo@correo.com");
        expect(inputForEmail).toBeValid();
    });

    test("No se acepta un email inválido", () => {
        const inputForEmail = screen.getByLabelText(/correo electrónico\*/i);
        userEvent.type(inputForEmail, "correo.com");
        expect(inputForEmail).toBeInvalid();
    });

    test("Una repetición de contraseña vacía no es valida", () => {
        const inputForPassword2 = screen.getByLabelText(/repetir contraseña\*/i);
        expect(inputForPassword2).toBeInvalid();
    });
})

describe("Componente formulario de register", () => {
    test("Renderiza el título", () => {
        const title = screen.getByRole('heading', {  name: /hola!/i});
        expect(title).toBeInTheDocument();     
        const subtitle = screen.getByRole('heading', {  name: /registrate en pyrobots/i});
        expect(subtitle).toBeInTheDocument();     
    });

    test("El input para ingresar el nombre de usuario está en el componente", () => {
        const inputUsernamePlaceholder = screen.getByPlaceholderText(/username/i);
        expect(inputUsernamePlaceholder).toBeInTheDocument();
        expect(inputUsernamePlaceholder).toBeInvalid();
    });

    test("El input para ingresar la contraseña está en el componente", () => {
        const inputForPasswordPlaceholder = screen.getByPlaceholderText(/password/i);
        expect(inputForPasswordPlaceholder).toBeInTheDocument();
    });

    test("El input para ingresar la repetición de contraseña está en el componente", () => {
        const inputForPassword2 = screen.getByLabelText(/repetir contraseña\*/i);
        expect(inputForPassword2).toBeInTheDocument();
    }); 
    
    test("El input para ingresar el email está en el componente", () => {
        const inputForEmail = screen.getByLabelText(/correo electrónico\*/i);
        expect(inputForEmail).toBeInTheDocument();
    });

    test("El input para ingresar el avatar está en el componente", () => {
        const inputForAvatar = screen.getByLabelText(/avatar/i);
        expect(inputForAvatar).toBeInTheDocument();
    });

    test("El error de contraseña no válida está en el componente", () => {
        const inputError = 
        screen.getByText(  /la contraseña tiene que ser de 8 caracteres como mínimo y contener mayúsculas, minúsculas y números\. no se permiten caracteres especiales\./i  );
        expect(inputError).toBeInTheDocument();
    }); 

    test("El error de repetición de contraseña no válida está en el componente", () => {
        const inputError = screen.getByText(/ambas contraseñas deben ser iguales\./i);
        expect(inputError).toBeInTheDocument();
    }); 
    
    test("El error de avatar no válido está en el componente", () => {
        const inputError = screen.getByText(/el avatar debe ser una imagen\./i);
        expect(inputError).toBeInTheDocument();
    }); 
    
    test("El error de avatar no válido está en el componente", () => {
        const inputError = screen.getByText(  /el email solo puede contener letras, numeros, puntos, guiones y guion bajo\./i  );
        expect(inputError).toBeInTheDocument();
    });

    test("El error de avatar no válido está en el componente", () => {
        const inputError = screen.getByText(  /el email solo puede contener letras, numeros, puntos, guiones y guion bajo\./i  );
        expect(inputError).toBeInTheDocument();
    });

    test("El botón para subir el formulario está en el componente", () => {
        const enviarForm = screen.getByRole('button', {  name: /enviar/i});
        expect(enviarForm).toBeInTheDocument();
    });
});