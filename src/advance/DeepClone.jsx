import React, { useState } from 'react'

const deepClone = (obj) => {
    if (obj === null || typeof (obj) !== 'object') {
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        clone[key] = deepClone(obj[key])
    }
    return clone;
}

const DeepClone = () => {
    const [input, setInput] = useState("");
    const [original, setOriginal] = useState(null);
    const [cloned, setCloned] = useState(null);

    const handleClone = () => {
        try {
            setOriginal(JSON.parse(input));

            const clonedObj = deepClone(JSON.parse(input));
            setCloned(clonedObj);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h3>Deep clone</h3>

            <textarea
                placeholder='Enter json here'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button onClick={handleClone}>
                Start
            </button>

            {original &&
                <div>
                    <p>Original object</p>
                    <pre>
                        {JSON.stringify(original, null, 2)}
                    </pre>
                </div>
            }

            {original &&
                <div>
                    <p>Cloned object</p>
                    <pre>
                        {JSON.stringify(cloned, null, 2)}
                    </pre>
                </div>
            }
        </div>
    )
}

export default DeepClone
