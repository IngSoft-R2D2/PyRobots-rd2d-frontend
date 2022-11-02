import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router} from 'react-router-dom';
import Simulation from "../Simulation.js";

const unmockedFetch = global.fetch

/* Fetching the Promise with the JSON method, which also returns the Promise with the data. */
/* el back esta devolviendo los robots */ 
beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve({1: 'bot1', 2: 'mega', 3: 'bot3', 4: 'bot4'}),
        })
})

/* Using the afterAll() jest hook and calling the global.fetch function to cleanup mock test. */
afterAll(() => {
    global.fetch = unmockedFetch
})

describe ("componentes formulario", () => {

    test('formulario: rounds', async () => {
        await act( async () => {render(<Router> <Simulation/> </Router>)})
        const rounds = screen.getByRole('spinbutton', { name: /rondas:/i })
        expect(rounds).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        await act( async () => {render(<Router> <Simulation/> </Router>)})
        const botSelect = screen.getByRole('combobox', { name: /robot 1:/i })
        expect(botSelect).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        await act( async () => {render(<Router> <Simulation/> </Router>)})
        const botSelect = screen.getByRole('combobox', { name: /robot 2:/i })
        expect(botSelect).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        await act( async () => {render(<Router> <Simulation/> </Router>)})
        const botSelect = screen.getByRole('combobox', {  name: /robot 3 \(opcional\):/i})
        expect(botSelect).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        await act( async () => {render(<Router> <Simulation/> </Router>)})
        const botSelect = screen.getByRole('combobox', {  name: /robot 4 \(opcional\):/i})
        expect(botSelect).toBeInTheDocument()
    }); 
}) 

describe ("campos", () => {

    test('rondas validas', async () => {
        await act( async () => {render(<Router> <Simulation/> </Router>)})
        const rounds = screen.getByRole('spinbutton', { name: /rondas:/i })
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(rounds,'100')
        expect(rounds).toBeValid()
    });

    test('rondas invalidas', async () => {
        await act( async () => {render(<Router> <Simulation/> </Router>)})
        const rounds = screen.getByRole('spinbutton', { name: /rondas:/i })
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(rounds,'100000')
        expect(rounds).toBeInvalid()
    });
})