import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';

import LobbyView from "../LobbyView.js"

const users = ["user1"]
const robots = ["bot1"]
const name = "test_match"
const creator_name = "user1"

beforeEach(() => {
    render
        (
        <Router>
            <LobbyView users={users} creator={creator_name} robots={robots} name={name}/>
        </Router>
        )
})

test('render list', async() => {

    const titleIcon = screen.getByTestId('SummarizeIcon');
    const title = screen.getByText(/Partida "test_match"/i);
    const user = screen.getByText(/user1/i);
    const bot = screen.getByText(/bot1/i);
    const creatorIcon = screen.getByTestId('Person4OutlinedIcon');

    expect(titleIcon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(bot).toBeInTheDocument();
    expect(creatorIcon).toBeInTheDocument();
})

test('render appBar', async() => {

    const BotIcon = screen.getByTestId('SmartToyIcon');
    const title = screen.getByText(/PyRobots/i);
    const CreateMatchButton = screen.getByText(/Crear partida/i);
    const SeeMatchButton = screen.getByText(/Ver partidas/i);
    const HomeButton = screen.getByText(/Menú/i);

    expect(BotIcon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(CreateMatchButton).toBeEnabled();
    expect(SeeMatchButton).toBeEnabled();
    expect(HomeButton).toBeEnabled();
})
