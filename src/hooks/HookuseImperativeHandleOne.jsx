import React, { forwardRef, useImperativeHandle, useState } from 'react'

const HookuseImperativeHandleOne = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(true);

    useImperativeHandle(ref, () => ({
        Toggle() {
            setToggle(!toggle);
        }
    }));

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>
                Click here
            </button>

            {toggle && <p>Welcome</p>}
        </div>
    )
})

export default HookuseImperativeHandleOne
