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
        json: () => Promise.resolve(
          {
            1: {
              "name": 'bot1',
              "avatar": "",
              "matches_played": 0,
              "matches_won": 0,
              "matches_lost": 0,
              "matches_tied": 0
            },
            2: {
              "name": 'mega',
              "avatar": "",
              "matches_played": 0,
              "matches_won": 0,
              "matches_lost": 0,
              "matches_tied": 0
            },
            3: {
              "name": 'bot3',
              "avatar": "",
              "matches_played": 0,
              "matches_won": 0,
              "matches_lost": 0,
              "matches_tied": 0
            },
            4: {
              "name": 'bot4',
              "avatar": "",
              "matches_played": 0,
              "matches_won": 0,
              "matches_lost": 0,
              "matches_tied": 0
            }
          }
        ),
      })
  })

/* Using the afterAll() jest hook and calling the global.fetch function to cleanup mock test. */
afterAll(() => {
    global.fetch = unmockedFetch
})

describe ("componentes formulario", () => {
    
    test('formulario: nombre', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const name = screen.getByText(/nombre/i);
        expect(name).toBeInTheDocument()
    });

    test('formulario: games', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const games = screen.getByText(/cantidad de juegos/i)
        expect(games).toBeInTheDocument()
    }); 

    test('formulario: min', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const min = screen.getByText(/mínima cantidad de jugadores/i)
        expect(min).toBeInTheDocument()
    }); 

    test('formulario: max', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const max = screen.getByText(/máxima cantidad de jugadores/i)
        expect(max).toBeInTheDocument()
    }); 

    test('formulario: rounds', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const rounds = screen.getByText(/cantidad de rondas/i)
        expect(rounds).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const botSelect = screen.getByRole('combobox')
        expect(botSelect).toBeInTheDocument()
    }); 

    test('Listar robots: bot1 ', async () => {
        await act(async () => { render(<Router> <Match /> </Router>) })
        const bot1 = screen.getByText(/bot1/i)
        expect(bot1).toBeInTheDocument()
    });

    test('Listar robots: bot2 ', async () => {
        await act(async () => { render(<Router> <Match /> </Router>) })
        const bot2 = screen.getByText(/mega/i)
        expect(bot2).toBeInTheDocument()
      });
    
    test('Listar robots: bot3 ', async () => {
        await act(async () => { render(<Router> <Match /> </Router>) })
        const bot3 = screen.getByText(/bot3/i)
        expect(bot3).toBeInTheDocument()
      });
    
    test('Listar robots: bot4 ', async () => {
        await act(async () => { render(<Router> <Match /> </Router>) })
        const bot4 = screen.getByText(/bot4/i)
        expect(bot4).toBeInTheDocument()
      });
      
}) 

describe ("campos", () => {
    test('juegos validos', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const games = screen.getByText(/cantidad de juegos/i)
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(games,'1')
        expect(games).toBeValid()
    });

    test('rondas validas', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const rounds = screen.getByText(/cantidad de rondas/i)
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(rounds,'100')
        expect(rounds).toBeValid()
    });

    test('minimo usuarios validos', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const min = screen.getByText(/mínima cantidad de jugadores/i)
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(min,' ')
        expect(min).toBeValid()
    });

    test('maximo usuarios validos', async () => {
        await act( async () => {render(<Router> <Match/> </Router>)})
        const max = screen.getByText(/máxima cantidad de jugadores/i)
        userEvent.type(max,' ')
        expect(max).toBeValid()
    });

})