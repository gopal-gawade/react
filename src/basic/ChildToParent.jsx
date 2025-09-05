import React from 'react'

const ChildToParent = ({ message, setMessage }) => {
    return (
        <div>
            <h3>Child to parent</h3>
            <p>{message}</p>

            <button onClick={() => setMessage("Hello World!")}>
                Click here
            </button>
        </div>
    )
}

export default ChildToParent
