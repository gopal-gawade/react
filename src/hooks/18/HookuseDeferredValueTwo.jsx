import React, { useDeferredValue, useMemo } from 'react'

const HookuseDeferredValueTwo = ({ val }) => {
    const dfVal = useDeferredValue(val);

    return useMemo(() => {
        const arr = [];

        for (let i = 0; i < 1000; i++) {
            arr.push(
                <div key={i}>
                    {dfVal}
                </div>
            )
        }
        return arr;
    })
}

export default HookuseDeferredValueTwo
