import React, { useState } from 'react'
import HookuseDeferredValueTwo from './HookuseDeferredValueTwo';

const HookuseDeferredValueOne = () => {
    const [val, setVal] = useState("");

    return (
        <div>
            <h3>useDeferredValue</h3>

            <input
                type='text'
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />

            <HookuseDeferredValueTwo val={val} />
        </div>
    )
}

export default HookuseDeferredValueOne
