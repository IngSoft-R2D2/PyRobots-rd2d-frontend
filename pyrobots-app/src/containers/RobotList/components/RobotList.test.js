import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router} from 'react-router-dom';
import BotList from "../BotList.js";

const unmockedFetch = global.fetch

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
    test('Listar robots: titulo ', async () => {
        await act( async () => {render(<Router> <BotList/> </Router>)})
        const robots = screen.getByText(/robots/i)
        expect(robots).toBeInTheDocument()
    });
    test('Listar robots: bot1 ', async () => {
        await act( async () => {render(<Router> <BotList/> </Router>)})
        const bot1 = screen.getByText(/bot1/i)
        expect(bot1).toBeInTheDocument()
    });
    test('Listar robots: bot2 ', async () => {
        await act( async () => {render(<Router> <BotList/> </Router>)})
        const mega = screen.getByText(/mega/i)
        expect(mega).toBeInTheDocument()
    });
    test('Listar robots: bot3 ', async () => {
        await act( async () => {render(<Router> <BotList/> </Router>)})
        const bot3 = screen.getByText(/bot3/i)
        expect(bot3).toBeInTheDocument()
    });
    test('Listar robots: bot4 ', async () => {
        await act( async () => {render(<Router> <BotList/> </Router>)})
        const bot4 = screen.getByText(/bot4/i)
        expect(bot4).toBeInTheDocument()
    });
});