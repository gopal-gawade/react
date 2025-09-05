import React, { forwardRef } from 'react'

const HookuseImperativeHandleTwo = forwardRef((props, ref) => {
    return (
        <div>
            <button onClick={() => ref.current.Toggle()}>
                Click here
            </button>
        </div>
    )
})

export default HookuseImperativeHandleTwo
