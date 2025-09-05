import React, { Component } from 'react'

class ClassProps extends Component {
    render() {
        const { message } = this.props;

        return (
            <div>
                <h3>Props in class component</h3>
                <p>{message}</p>
            </div>
        )
    }
}

export default ClassProps
