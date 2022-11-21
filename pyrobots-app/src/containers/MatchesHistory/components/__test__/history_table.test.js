import { render, screen, fireEvent, act, waitFor, within, toBeDisabled } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';
import MatchesHistory from "../../MatchesHistory.js";

const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve({
              "match_4": {
                "id": 4,
                "name": "m4",
                "min_players": 2,
                "max_players": 4,
                "number_of_games": 200,
                "number_of_rounds": 1000,
                "is_secured": true,
                "is_started": true,
                "is_finished": true,
                "results": {
                  "participants": [
                    {
                      "is_loser": false,
                      "is_winner": true,
                      "lost_games": 99,
                      "robot_name": "random",
                      "tied": false,
                      "user_name": "angeles",
                      "won_games": 101
                    },
                    {
                      "is_loser": true,
                      "is_winner": false,
                      "lost_games": 101,
                      "robot_name": "random",
                      "tied": false,
                      "user_name": "angelescch",
                      "won_games": 99
                    }
                  ]
                },
                "creator": 1,
                "user_id": 1,
                "user_name": "angelescch",
                "players": {
                  "angelescch": {
                    "robot_id": "1",
                    "robot_name": "random"
                  },
                  "angeles": {
                    "robot_id": "3",
                    "robot_name": "random"
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
                  "is_started": true,
                  "is_finished": true,
                  "creator": 1,
                  "user_id": 5,
                  "user_name": "gelescch",
                  "players": {
                    "angelescch": {
                      "robot_id": "1",
                      "robot_name": "random"
                    }
                  },
                  "user_is_creator": false,
                  "is_available_to_join": false,
                  "is_available_to_leave": false,
                  "is_ready_to_start": false,
                  "user_is_already_joined": false
                },
                "match_5": {
                  "id": 5,
                  "name": "m5",
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
    test('Partida terminada se muestra', async () => {
      await act( async () => {render(<Router> <MatchesHistory/> </Router>)})
      const match=screen.queryByRole('rowheader', {
        name: /m4/i
      })
      expect(match).toBeInTheDocument();
    });
    test('Partida no terminada no se muestra', async () => {
      await act( async () => {render(<Router> <MatchesHistory/> </Router>)})
      const match=screen.queryByRole('rowheader', {
        name: /m6/i
      })
      expect(match).toBeNull();
    });
    test('Partida terminada en la que participé se muestra', async () => {
      await act( async () => {render(<Router> <MatchesHistory/> </Router>)})
      const match=screen.queryByRole('rowheader', {
        name: /m5/i
      })
      expect(match).toBeInTheDocument();
    });
    test('Partida terminada en la no que participé no se muestra', async () => {
      await act( async () => {render(<Router> <MatchesHistory/> </Router>)})
      const match=screen.queryByRole('rowheader', {
        name: /m5/i
      })
      expect(match).toBeNull();
    });

});