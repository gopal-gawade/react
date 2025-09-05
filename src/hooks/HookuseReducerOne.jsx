import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'inc':
            return {
                count: state.count + action.value
            }
        case 'dec':
            return {
                count: state.count - action.value
            }
        case 'res':
            return initialState;
        default:
            return state
    }
}

const HookuseReducerOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>useReducer</h3>
            <p>{count.count}</p>

            <button onClick={() => dispatch({ type: 'inc', value: 1 })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: 'dec', value: 1 })}>
                Decrement
            </button>

            <button onClick={() => dispatch({ type: 'res' })}>
                Reset
            </button>
        </div>
    )
}

export default HookuseReducerOne
