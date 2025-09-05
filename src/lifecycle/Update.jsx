import React, { Component } from 'react'

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  /*
  static getDerivedStateFromProps() {
    return {
      count: 1
    }
  }
  */

  shouldComponentUpdate(prevProps, prevState) {
    if (prevState !== this.state.count) {
      return true;
    }
    else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState !== this.state.count) {
      return this.state.count;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.count) {
      console.log("Updating");
    }
    else {
      console.log("NA");
    }
  }

  render() {
    return (
      <div>
        <h4>Updating</h4>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>
          {this.state.count}
        </button>
      </div>
    )
  }
}

export default Update
