import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';
import Results from "../Results.js";

const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve(
            [
                   {
                        'user_name': 'Lucas', 
                        'robot_name': 'Robot3000',
                        'won_games': '45',
                                    'lost_games': '15'
                    },
                   {
                        'user_name': 'mati', 
                        'robot_name': 'Megatron',
                        'won_games': '40',
                        'lost_games': '20'
                    }
            
                ]
            ),
        })
})

afterAll(() => {
    global.fetch = unmockedFetch
})

describe("Componente de resultados", () => {
    test('Listar resultados: titulo ', async () => {
        await act( async () => {render(<Router> <Results/> </Router>)})
        const finishedMatch = screen.getByText(/Jugadores/i);  
        expect(finishedMatch).toBeInTheDocument();  
    });

    test("Primera columna de la tabla está en el componente", async () => {
        await act( async () => {render(<Router> <Results/> </Router>)})
        const tableFirstRow = screen.getByRole('columnheader', { 
            name: /jugadores/i
        });
        expect(tableFirstRow ).toBeInTheDocument();     
    });

    test("Segunda columna de la tabla está en el componente", async () => {
        await act( async () => {render(<Router> <Results/> </Router>)})
        const tableSecondRow = screen.getByRole('columnheader', { 
            name: /juegos ganados/i
        });
        expect(tableSecondRow).toBeInTheDocument();     
    });

    test("Tercera columna de la tabla está en el componente", async () => {
        await act( async () => {render(<Router> <Results/> </Router>)})
        const tableSecondRow = screen.getByRole('columnheader', { 
            name: /juegos perdidos/i
        });
        expect(tableSecondRow).toBeInTheDocument();     
    });
    
});
