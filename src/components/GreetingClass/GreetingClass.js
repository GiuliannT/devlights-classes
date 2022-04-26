import React, { Component } from 'react'

export class GreetingClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: "I'm Greeting Class",
            counter: 1,
        };
    }

    plusOne = () => {
        this.setState((prevState) => ({...prevState, counter: prevState.counter + 1}))
    }

    render() {
        return (
            <>
                <h1>Hi! {this.props.name ? `My name is ${this.props.name}` : ''} - GreetingClass</h1>
                <h3>State:</h3>
                <code>{JSON.stringify(this.state, null, 2)}</code>
                <h3>Props:</h3>
                <code>{JSON.stringify(this.props, null, 2)}</code>
                <p>{this.state.counter}</p>
                <button onClick={this.plusOne}>+1 counter</button>
                <hr />
            </>
        )
    }
}