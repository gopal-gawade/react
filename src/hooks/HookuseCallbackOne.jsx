import React, { useCallback, useState } from 'react'
import HookuseCallbackTwo from './HookuseCallbackTwo';

const HookuseCallbackOne = () => {
    const [toggle, settoggle] = useState(false);
    const [title, setTitle] = useState("Hello");

    /*
    const returnTitle = () => {
        return title;
    }
    */

    const returnTitle = useCallback(() => {
        return title;
    }, [title]);

    return (
        <div>
            <h3>useCallback</h3>

            <p>{!toggle ? "False" : "True"}</p>
            <button onClick={() => settoggle(!toggle)}>
                Click here
            </button>

            <HookuseCallbackTwo returnTitle={returnTitle} />
        </div>
    )
}

export default HookuseCallbackOne
