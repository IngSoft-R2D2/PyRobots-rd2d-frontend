import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router} from 'react-router-dom';
import Bot from "../../Bot"

// global.fetch = jest.fn(() =>
// Promise.resolve({
//     json: () => Promise.resolve({operation_result : "Successfully created."}),
// }))

test('render all fields', async() => {
    act(() => {render(<Router> <Bot/> </Router>)})

    const head = screen.getByRole('heading', { name: /crear robot/i })
    const name = screen.getByRole('textbox', { name: /nombre:/i })
    const avatar = screen.getByLabelText(/avatar:/i);
    const code = screen.getByLabelText(/código: \(\.py\)/i)
    const submit = screen.getByRole('button', {name: /submit/i})

    expect(head).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(code).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

})

test('if no name, invalid input', async () => {

    await act(async () => {render(<Router> <Bot/> </Router>)})

    const name = screen.getByRole('textbox', { name: /nombre:/i })

    expect(name).toBeInvalid();

})

test('if ok name, valid input', async () => {


    await act(async () => {render(<Router> <Bot/> </Router>)})

    const name = screen.getByRole('textbox', { name: /nombre:/i })

    await userEvent.type(name, 'robot')

    expect(name).toBeValid();

})

test('if no code file, invalid input', async () => {

    act(() => {render(<Router> <Bot/> </Router>)})

    const code = screen.getByLabelText(/código: \(\.py\)/i)
    expect(code).toBeInvalid();
})

test('if .py code file, valid input', async () => {

    act(() => {render(<Router> <Bot/> </Router>)})

    const code = screen.getByLabelText(/código: \(\.py\)/i)
    const codeFile = new File(["main"], 'main.py', { type: 'text/x-python' });

    await userEvent.upload(code, codeFile);
      
    expect(code).toBeDefined();
})

test('avatar types', async () => {

    act(() => {render(<Router> <Bot/> </Router>)})

    const pngfile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const jpgfile = new File(['hello'], 'hello.jpg', { type: 'image/jpg' });

    const avatar = screen.getByLabelText(/avatar:/i);

    await userEvent.upload(avatar, pngfile);

    expect(avatar).toBeValid();

    await userEvent.upload(avatar, jpgfile);

    expect(avatar).toBeValid();
})

// test('if ok, fetch', async () => {

//     act(() => {render(<Router> <Bot/> </Router>)})
    
//     const jsdomAlert = window.alert;  // remember the jsdom alert
//     window.alert = () => {};

//     const codeFile = new File(["main"], 'main.py', { type: 'text/x-python' });

//     const name = screen.getByRole('textbox', { name: /nombre:/i })
//     const submit = screen.getByRole('button', {name: /submit/i}) 
//     const code = screen.getByLabelText(/código: \(\.py\)/i)

//     await userEvent.type(name, "robot")

//     await userEvent.upload(code, codeFile);

//     await userEvent.click(submit)

//     expect(fetch).toHaveBeenCalledTimes(1)
//     window.alert = jsdomAlert;  // restore the jsdom alert
// })