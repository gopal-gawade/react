import React, { useEffect, useRef, useState } from 'react'

const InlineEditableInput = () => {
    const [arr, setArr] = useState([
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Welcome' }
    ]);
    const [currId, setCurrId] = useState(null);
    const [currVal, setCurrVal] = useState(null);
    const ref = useRef(null);

    const handleEdit = (id, val) => {
        setCurrId(id);
        setCurrVal(val);
    }

    const handleBlur = () => {
        if (currId !== null) {
            save();
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            save();
        }
        else if (e.key === "Escape") {
            setCurrId(null);
        }
    }

    const save = () => {
        if (currId !== null) {
            setArr(arr.map(v => v.id === currId ? { ...v, message: currVal } : v))
        }
        setCurrId(null);
    }

    useEffect(() => {
        if (currId !== null && ref.current) {
            ref.current.focus()
        }
    }, [currId]);

    return (
        <div>
            <h4>Inline editable input</h4>

            {arr.map((v) => {
                return (
                    <div key={v.id} onClick={() => handleEdit(v.id, v.message)}>
                        {currId === v.id ?
                            <input
                                type='text'
                                value={currVal}
                                ref={ref}
                                onChange={(e) => setCurrVal(e.target.value)}
                                onKeyDown={handleKeyDown}
                                onBlur={handleBlur}
                            /> :
                            <p>{v.message}</p>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default InlineEditableInput
