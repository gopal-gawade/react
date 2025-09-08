import React, { useState } from 'react'

const Counter = () => {
    const [history, setHistory] = useState([0]);
    const [position, setPosition] = useState(0);

    const currVal = history[position];

    const addVal = (val) => {
        const newHistory = history.slice(0, position + 1);
        setHistory([...newHistory, val]);
        setPosition(position + 1);
    }

    const dec = () => {
        addVal(currVal - 1);
    }

    const inc = () => {
        addVal(currVal + 1);
    }

    const undo = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
    }

    const redo = () => {
        if (position < history.length - 1) {
            setPosition(position + 1);
        }
    }

    return (
        <div>
            <h4>Counter with undo and redo</h4>
            <p>{currVal}</p>

            <button onClick={dec}>
                -
            </button>
            <button onClick={inc}>
                +
            </button>
            <br />

            <p>{position + 1}/{history.length}</p>
            <button disabled={position === 0} onClick={undo}>
                Undo
            </button>
            <button disabled={position === history.length - 1} onClick={redo}>
                Redo
            </button>
        </div>
    )
}

export default Counter
