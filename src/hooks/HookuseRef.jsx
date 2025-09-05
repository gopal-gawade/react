import React, { useRef } from 'react'

const HookuseRef = () => {
    const inputRef = useRef(null);

    const InputRef = () => {
        inputRef.current.style.color = "red";
    }
    return (
        <div>
            <h3>useRef</h3>

            <input
                type='text'
                ref={inputRef}
            />

            <button onClick={InputRef}>
                Click here
            </button>
        </div>
    )
}

export default HookuseRef
