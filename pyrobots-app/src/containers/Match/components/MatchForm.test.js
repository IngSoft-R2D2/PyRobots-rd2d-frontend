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
            json: () => Promise.resolve({1: 'bot1', 2: 'mega', 3: 'bot3', 4: 'bot4'}),
        })
})

/* Using the afterAll() jest hook and calling the global.fetch function to cleanup mock test. */
afterAll(() => {
    global.fetch = unmockedFetch
})

describe ("componentes formulario", () => {
    
    test('formulario: nombre', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const name = screen.getByRole('textbox', { name: /nombre:/i })
        expect(name).toBeInTheDocument()
    });

    test('formulario: games', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const games = screen.getByRole('spinbutton', { name: /juegos:/i})
        expect(games).toBeInTheDocument()
    }); 

    test('formulario: min', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const min = screen.getByRole('spinbutton', { name: /mínimo jugadores:/i })
        expect(min).toBeInTheDocument()
    }); 

    test('formulario: max', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const max = screen.getByRole('spinbutton', { name: /máximo jugadores:/i })
        expect(max).toBeInTheDocument()
    }); 

    test('formulario: rounds', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const rounds = screen.getByRole('spinbutton', { name: /rondas:/i })
        expect(rounds).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const botSelect = screen.getByRole('combobox', { name: /Seleccione un robot:/i })
        expect(botSelect).toBeInTheDocument()
    }); 

    test('formulario: robots-1', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        userEvent.selectOptions(
            // Find the select element
            screen.getByRole('combobox', { name: /Seleccione un robot:/i }),
            // Find and select the robot option
            screen.getByRole('option', {name: 'bot1'}),
          )
        expect(screen.getByRole('option', {name: 'bot1'}).selected).toBe(true)
    }); 

    test('formulario: robots-2', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        userEvent.selectOptions(
            // Find the select element
            screen.getByRole('combobox', { name: /Seleccione un robot:/i }),
            // Find and select the robot option
            screen.getByRole('option', {name: 'mega'}),
          )
        expect(screen.getByRole('option', {name: 'mega'}).selected).toBe(true)
    }); 

    test('formulario: robots-3', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        userEvent.selectOptions(
            // Find the select element
            screen.getByRole('combobox', { name: /Seleccione un robot:/i }),
            // Find and select the robot option
            screen.getByRole('option', {name: 'bot3'}),
          )
        expect(screen.getByRole('option', {name: 'bot3'}).selected).toBe(true)
    }); 

    test('formulario: robots-4', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        userEvent.selectOptions(
            // Find the select element
            screen.getByRole('combobox', { name: /Seleccione un robot:/i }),
            // Find and select the robot option
            screen.getByRole('option', {name: 'bot4'}),
          )
        expect(screen.getByRole('option', {name: 'bot4'}).selected).toBe(true)
    }); 
}) 

describe ("campos", () => {
    test('juegos validos', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const games = screen.getByRole('spinbutton', { name: /juegos:/i})
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(games,'1')
        expect(games).toBeValid()
    });

    test('juegos validos', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const games = screen.getByRole('spinbutton', { name: /juegos:/i})
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(games,'1000')
        expect(games).toBeInvalid()
    });

    test('rondas validas', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const rounds = screen.getByRole('spinbutton', { name: /rondas:/i })
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(rounds,'100')
        expect(rounds).toBeValid()
    });

    test('rondas invalidas', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const rounds = screen.getByRole('spinbutton', { name: /rondas:/i })
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(rounds,'100000')
        expect(rounds).toBeInvalid()
    });

    test('minimo usuarios validos', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const min = screen.getByRole('spinbutton', { name: /mínimo jugadores:/i })
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(min,' ')
        expect(min).toBeValid()
    });

    test('minimo usuarios invalidos', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const min = screen.getByRole('spinbutton', { name: /mínimo jugadores:/i })
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(min,'3')
        expect(min).toBeInvalid()
    });

    test('maximo usuarios validos', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const max = screen.getByRole('spinbutton', { name: /máximo jugadores:/i })
        userEvent.type(max,' ')
        expect(max).toBeValid()
    });

    test('maximo usuarios invalidos', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const max = screen.getByRole('spinbutton', { name: /máximo jugadores:/i })
        userEvent.type(max,'3')
        expect(max).toBeInvalid()
    });
})