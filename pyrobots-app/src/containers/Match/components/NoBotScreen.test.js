import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router} from 'react-router-dom';
import Match from "../Match.js";

const unmockedFetch = global.fetch

/* Fetching the Promise with the JSON method, which also returns the Promise with the data. */
/* el back esta devolviendo los robots */ 
beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve([]),
        })
})

/* Using the afterAll() jest hook and calling the global.fetch function to cleanup mock test. */
afterAll(() => {
    global.fetch = unmockedFetch
})

describe ("componentes screen", () => {

    test('Boton: volver atras', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const name = screen.getByRole('alert', { name: "" })
        expect(name).toBeInTheDocument()
    });
    
    test('Boton: volver atras', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const name = screen.getByRole('button', { name: /Volver atras/i })
        expect(name).toBeInTheDocument()
    });
    test('Boton: Crear robot', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const name = screen.getByRole('button', { name: /Crear robot/i })
        expect(name).toBeInTheDocument()
    });
});