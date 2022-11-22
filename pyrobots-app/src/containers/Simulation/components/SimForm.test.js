import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router} from 'react-router-dom';
import Simulation from "./SimForm.js";

// const unmockedFetch = global.fetch
const inputs = 
    {
        robot_id1:1,
        robot_id2:2,
        robot_id3:3,
        robot_id4:4,
        rounds: 10000
    }

const robots = 
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
/* Fetching the Promise with the JSON method, which also returns the Promise with the data. */
/* el back esta devolviendo los robots */ 
beforeEach(() => {
    render(
        <Router> 
            <Simulation robots = {robots} inputs={inputs}/>
        </Router> 
    );
  })



/* Using the afterAll() jest hook and calling the global.fetch function to cleanup mock test. */
// afterAll(() => {
//     global.fetch = unmockedFetch
// })

describe ("componentes formulario", () => {

    test('formulario: rounds', async () => {
        // await act( async () => {render(<Router> <Simulation/> </Router>)})
        const rounds = screen.getByText(/cantidad de rondas/i)
        expect(rounds).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        // await act( async () => {render(<Router> <Simulation/> </Router>)})
        const botSelect = screen.getByText(/robot 1/i);
        expect(botSelect).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        
        const botSelect = screen.getByText(/robot 2/i);
        expect(botSelect).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        
        const botSelect = screen.getByText(/robot 3 \(opcional\)/i);
        expect(botSelect).toBeInTheDocument()
    }); 

    test('formulario: robots', async () => {
        
        const botSelect = screen.getByText(/robot 4 \(opcional\)/i);
        expect(botSelect).toBeInTheDocument()
    }); 
}) 

describe ("campos", () => {

    test('rondas validas', async () => {
        
        const rounds = screen.getByText(/cantidad de rondas/i);
        // const submit = screen.getByRole('button', { name: /crear/i })
        userEvent.type(rounds,'100')
        expect(rounds).toBeValid()
    });

    // test('rondas invalidas', async () => {
        
    //     const rounds = screen.getByText(/cantidad de rondas/i);
    //     // const submit = screen.getByRole('button', { name: /crear/i })
    //     userEvent.type(rounds,'100000')
    //     expect(rounds).toBeInvalid()
    // });
})