import { render, screen, act, within } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';
import MatchesList from "../../MatchesList.js";

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
                "number_of_rounds": 333,
                "is_secured": false,
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
                  "angelescc": {
                    "robot_id": "124",
                    "robot_name": "randoom"
                  }
                },
                "user_is_creator": true,
                "is_available_to_join": false,
                "is_available_to_leave": false,
                "is_ready_to_start": false,
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
                  "max_players": 2,
                  "number_of_games": 200,
                  "number_of_rounds": 330,
                  "is_secured": true,
                  "is_started": false,
                  "is_finished": false,
                  "creator": 1,
                  "user_id": 5,
                  "user_name": "fuster",
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
                  "is_ready_to_start": true,
                  "user_is_already_joined": false
                }
              }),
        })
})

/* Using the afterAll() jest hook and calling the global.fetch function to cleanup mock test. */
afterAll(() => {
    global.fetch = unmockedFetch
})

describe ("Partidas", () => {
    test('Partida propia ', async () => {
        await act( async () => {render(<Router> <MatchesList/> </Router>)})
        const row = screen.getByRole('row', {
          name: "m2 1/2 Lobby"
        });
        expect(row).toBeInTheDocument()
    });
    test('Partida para unirse', async () => {
      await act( async () => {render(<Router> <MatchesList/> </Router>)})
      const row = screen.getByRole('row', {
        name: "m5 1/4 unirse"
      });
      expect(row).toBeInTheDocument()
    });
    test('Partida para unirse debe tener botón disponible', async () => {
      await act( async () => {render(<Router> <MatchesList/> </Router>)})
      const row = screen.getByRole('row', {
        name: "m5 1/4 unirse"
      });
      const button = within(row).getByText('unirse').closest("button");
      expect(button).toBeEnabled();
    });
    test('Partida llena', async () => {
      await act( async () => {render(<Router> <MatchesList/> </Router>)})
      const row = screen.getByRole('row', {
        name: "m6 2/2 unirse"
      });
      expect(row).toBeInTheDocument()
    });
    test('Partida llena debe mostrar boton desactivado', async () => {
      await act( async () => {render(<Router> <MatchesList/> </Router>)})
      const row = screen.getByRole('row', {
        name: "m6 2/2 unirse"
      });
      const button = within(row).getByText('unirse').closest("button");
      expect(button).toBeDisabled();
    });
    test('Partida terminada no se muestra', async () => {
      await act( async () => {render(<Router> <MatchesList/> </Router>)})
      const match=screen.queryByRole('rowheader', {
        name: /m1/i
      })
      expect(match).toBeNull();
    });

});