import React, { Component } from 'react'

class Unmount extends Component {
  componentWillUnmount() {
    console.log("Unmount")
  }

  render() {
    return (
      <div>
        <h4>Unmounting</h4>
      </div>
    )
  }
}

export default Unmount
