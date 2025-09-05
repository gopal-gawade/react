import { Component } from "react";

class ClassCmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    Inc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h3>Class component</h3>

                <button onClick={this.Inc}>
                    {this.state.count}
                </button>
            </div>
        )
    }
}

export default ClassCmp;
