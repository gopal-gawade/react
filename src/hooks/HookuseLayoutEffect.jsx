import React, { useLayoutEffect, useState } from 'react'

const HookuseLayoutEffect = () => {
    const [message, setMessage] = useState("");

    useLayoutEffect(() => {
        setMessage("Hello World!")
    }, []);

    return (
        <div>
            <h3>useLayoutEffect</h3>
            <p>{message}</p>
        </div>
    )
}

export default HookuseLayoutEffect
