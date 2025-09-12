import React, { useState } from 'react';

const StringCompression = () => {
    const [text, setText] = useState("");
    const [compressedText, setCompressedText] = useState("");

    const compressStr = (str) => {
        if (!str) return "";

        let compressed = '';
        let count = 1;

        for (let i = 1; i <= str.length; i++) {
            if (str[i] === str[i - 1]) {
                count++;
            } else {
                compressed += str[i - 1] + count;
                count = 1;
            }
        }

        return compressed;
    }

    const handleString = (e) => {
        const str = e.target.value;
        setText(str);
        const compressed = compressStr(str);
        setCompressedText(compressed);
    }

    return (
        <div>
            <h3>String Compression</h3>

            <textarea
                placeholder='Enter text'
                value={text}
                onChange={handleString}
            />

            <p>{compressedText}</p>
        </div>
    )
}

export default StringCompression;
