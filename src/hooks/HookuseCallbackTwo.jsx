import React, { useEffect, useState } from 'react'

const HookuseCallbackTwo = ({ returnTitle }) => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        setNum(Math.random().toFixed(2));
    }, [returnTitle]);


    return (
        <div>
            <p>{num}</p>
        </div>
    )
}

export default HookuseCallbackTwo
