import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router} from 'react-router-dom';
import MatchesList from "../MatchesList.js";

const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve({
                "match_1": {
                  "id": 1,
                  "name": "m1",
                  "min_players": 2,
                  "max_players": 2,
                  "number_of_games": 200,
                  "number_of_rounds": 3330,
                  "is_secured": true,
                  "is_started": false,
                  "is_finished": false,
                  "creator": 1,
                  "user_id": 1,
                  "user_name": "angelescch",
                  "players": {
                    "angelescch": {
                      "robot_id": "1",
                      "robot_name": "random"
                    },
                    "angeles": {
                      "robot_id": "5",
                      "robot_name": "spin"
                    }
                  },
                  "user_is_creator": true,
                  "is_available_to_join": false,
                  "is_available_to_leave": false,
                  "is_ready_to_start": true,
                  "user_is_already_joined": true
                },
                "match_2": {
                  "id": 2,
                  "name": "m2",
                  "min_players": 2,
                  "max_players": 2,
                  "number_of_games": 200,
                  "number_of_rounds": 333,
                  "is_secured": true,
                  "is_started": false,
                  "is_finished": false,
                  "creator": 1,
                  "user_id": 1,
                  "user_name": "angelescch",
                  "players": {
                    "angelescch": {
                      "robot_id": "1",
                      "robot_name": "random"
                    }
                  },
                  "user_is_creator": true,
                  "is_available_to_join": false,
                  "is_available_to_leave": false,
                  "is_ready_to_start": false,
                  "user_is_already_joined": true
                },
                "match_3": {
                  "id": 3,
                  "name": "m3",
                  "min_players": 2,
                  "max_players": 2,
                  "number_of_games": 200,
                  "number_of_rounds": 333,
                  "is_secured": true,
                  "is_started": true,
                  "is_finished": true,
                  "creator": 1,
                  "user_id": 1,
                  "user_name": "angelescch",
                  "players": {
                    "angelescch": {
                      "robot_id": "1",
                      "robot_name": "random"
                    },
                    "angeles": {
                      "robot_id": "5",
                      "robot_name": "spin"
                    }
                  },
                  "user_is_creator": true,
                  "is_available_to_join": false,
                  "is_available_to_leave": false,
                  "is_ready_to_start": false,
                  "user_is_already_joined": true
                },
                "match_4": {
                  "id": 4,
                  "name": "m4",
                  "min_players": 2,
                  "max_players": 4,
                  "number_of_games": 200,
                  "number_of_rounds": 330,
                  "is_secured": true,
                  "is_started": false,
                  "is_finished": false,
                  "creator": 2,
                  "user_id": 1,
                  "user_name": "angelescch",
                  "players": {
                    "angelescch": {
                      "robot_id": "1",
                      "robot_name": "random"
                    },
                    "angeles": {
                      "robot_id": "5",
                      "robot_name": "spin"
                    }
                  },
                  "user_is_creator": false,
                  "is_available_to_join": false,
                  "is_available_to_leave": true,
                  "is_ready_to_start": true,
                  "user_is_already_joined": true
                },
                "match_5": {
                  "id": 5,
                  "name": "m5",
                  "min_players": 2,
                  "max_players": 4,
                  "number_of_games": 200,
                  "number_of_rounds": 330,
                  "is_secured": true,
                  "is_started": false,
                  "is_finished": false,
                  "creator": 2,
                  "user_id": 1,
                  "user_name": "angelescch",
                  "players": {
                    "angeles": {
                      "robot_id": "5",
                      "robot_name": "spin"
                    }
                  },
                  "user_is_creator": false,
                  "is_available_to_join": true,
                  "is_available_to_leave": false,
                  "is_ready_to_start": false,
                  "user_is_already_joined": false
                },
                "match_6": {
                  "id": 6,
                  "name": "m6",
                  "min_players": 2,
                  "max_players": 4,
                  "number_of_games": 200,
                  "number_of_rounds": 330,
                  "is_secured": true,
                  "is_started": true,
                  "is_finished": true,
                  "creator": 2,
                  "user_id": 1,
                  "user_name": "angelescch",
                  "players": {
                    "angelescch": {
                      "robot_id": "1",
                      "robot_name": "random"
                    },
                    "angeles": {
                      "robot_id": "5",
                      "robot_name": "spin"
                    }
                  },
                  "user_is_creator": false,
                  "is_available_to_join": false,
                  "is_available_to_leave": false,
                  "is_ready_to_start": false,
                  "user_is_already_joined": true
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
        const match_1 = screen.getByText(/m1/)
        expect(match_1).toBeInTheDocument()
    });
    test('Listar partidas: 2 ', async () => {
        await act( async () => {render(<Router> <MatchesList/> </Router>)})
        const mega = screen.getByText(/m2/i)
        expect(mega).toBeInTheDocument()
    });
    test('Listar partidas: 3 ', async () => {
        await act( async () => {render(<Router> <MatchesList/> </Router>)})
        const bot3 = screen.getByText(/m3/i)
        expect(bot3).toBeInTheDocument()
    });
    test('Listar partidas: 4, robot presente ', async () => {
        await act( async () => {render(<Router> <MatchesList/> </Router>)})
        const bot4 = screen.getByText(/m4/i)
        expect(bot4).toBeInTheDocument()
    });
});