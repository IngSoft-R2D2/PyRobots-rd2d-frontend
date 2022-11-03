import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router} from 'react-router-dom';
import MatchesList from "../MyMatches.js";

const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve({

                "match_1": {
                  "id": 1,                     // match id
                  "name": "NNKERL",            // match name
                  "min_players": 2,
                  "max_players": 4,
                  "number_of_games": 34,
                  "number_of_rounds": 1345,
                  "password": "secret",
                  "is_finished": false,
                  "creator": 1,               // creator user id
                  "users_robots": {
                    "nacho": "MEGATRON"
                  }
                },
              
                  "match_2": {
                      "id": 2,
                      "name": "pool",
                  "min_players": 8,
                      "max_players": 10,
                  "number_of_games": 125,
                  "number_of_rounds": 1010,
                  "password": "",
                  "is_finished": false,
                  "creator": 2,
                  "users_robots": {
                          "ana":"MEGArobot"
                      }
                  },
              
                  "match_3": {
                          "id": 3,
                    "name": "NGBI",
                    "min_players": 3,
                    "max_players": 5,
                    "number_of_games": 5,
                    "number_of_rounds": 10,
                    "password": "AGSV87NG4",
                    "is_finished": false,
                    "creator": 2,
                    "users_robots": {
                              "ana":"Roboto090"
                          }
                      },
              
                  "match_4": {
                          "id": 4,
                    "name": "KGN",
                    "min_players": 3,
                    "max_players": 5,
                    "number_of_games": 5,
                    "number_of_rounds": 10,
                    "password": "",
                    "is_finished": false,
                    "creator": 3,
                    "users_robots": {
                              "angelescch":"R2D2",
                              "juan" : "Arturito",
                              "alfonsina": "Herbie"

                          }
                      }
              
              }),
        })
})

/* Using the afterAll() jest hook and calling the global.fetch function to cleanup mock test. */
afterAll(() => {
    global.fetch = unmockedFetch
})

describe ("componentes formulario", () => {

    test('Listar partidas: 1 ', async () => {
        await act( async () => {render(<Router> <MatchesList/> </Router>)})
        const match_1 = screen.getByText(/NNKERL/)
        expect(match_1).toBeInTheDocument()
    });
    test('Listar partidas: 2 ', async () => {
        await act( async () => {render(<Router> <MatchesList/> </Router>)})
        const mega = screen.getByText(/pool/i)
        expect(mega).toBeInTheDocument()
    });
    test('Listar partidas: 3 ', async () => {
        await act( async () => {render(<Router> <MatchesList/> </Router>)})
        const bot3 = screen.getByText(/NGBI/i)
        expect(bot3).toBeInTheDocument()
    });
    test('Listar partidas: 4, robot presente ', async () => {
        await act( async () => {render(<Router> <MatchesList/> </Router>)})
        const bot4 = screen.getByText(/Herbie/i)
        expect(bot4).toBeInTheDocument()
    });
});