import React, { useState } from 'react'

const FunctionalState = () => {
    const [text, setText] = useState("");
    const [obj, setObj] = useState({
        title: "",
        author: {
            fn: "",
            ln: ""
        }
    });
    const [arr, setArr] = useState([]);

    const setObject = () => {
        setObj({
            ...obj,
            title: "React Notes",
            author: {
                ...obj.author,
                fn: "Gopal",
                ln: "Gawade"
            }
        })
    }

    return (
        <div>
            <h3>State in class component</h3>

            <button onClick={() => setText("Hello")}>
                Click here
            </button>
            <p>{text}</p>

            <button onClick={setObject}>
                Click here
            </button>
            <p>{obj.title} {obj.author.fn} {obj.author.ln}</p>

            <button onClick={() => setArr(["Val 1", "Val 2"])}>
                Click here
            </button>

            {arr.map((v, i) => {
                return (
                    <p key={i}>
                        {v}
                    </p>
                )
            })}
        </div>
    )
}

export default FunctionalState;
