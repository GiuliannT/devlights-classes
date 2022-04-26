import { useEffect, useState } from "react"

export const GreetingFunction = ({ name, ...props }) => {

    const [state, setState] = useState({
        test: "I'm Greeting Function",
        counter: 99,
    })
    const plusOne = () => { setState({ ...state, counter: state.counter + 1 }) }

    useEffect(() => {
       console.log(`useEffect ----> name: ${name}`);
       console.log(`useEffect ----> counter: ${state.counter}`);
    }, [name, state.counter])


    return (
        <>
            <h1>Hi! {name ? `My name is ${name}` : ''} - GreetingFunction</h1>
            <h3>State:</h3>
            <code>{JSON.stringify(state, null, 2)}</code>
            <h3>Props:</h3>
            <code>{JSON.stringify({name, ...props}, null, 2)}</code>
            <p>{state.counter}</p>
            <button onClick={plusOne}>+1 counter</button>
            <hr />
        </>
    )
}