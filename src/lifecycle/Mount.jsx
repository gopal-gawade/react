import React, { Component } from 'react'

class Mount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    static getDerivedStateFromProps() {
        return {
            count: 1
        }
    }

    componentDidMount() {
        console.log('Mounting')
    }

    render() {
        return (
            <div>
                <h4>Mounting</h4>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Mount
