import React, { Component } from 'react'

export class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    render() {
        return (
            <div>
                <h3>State in class component</h3>

                <button onClick={() => { this.setState({ message: "Hello World!" }) }}>
                    {!this.state.message ? "Click here" : `${this.state.message}`}
                </button>
            </div>
        )
    }
}

export default ClassState
