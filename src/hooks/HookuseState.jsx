import React, { useState } from 'react'

const HookuseState = () => {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    const addTodo = () => {
        setList([...list, { id: Math.random(), Todo: todo }]);
        setTodo("");
    }

    const updateTodo = (id) => {
        setList(list.map((v) => {
            if (v.id === id) {
                v.Todo = todo;
            }
            return v;
        }));
        setTodo("");
    }

    const deleteTodo = (id) => {
        setList(list.filter((v) => v.id !== id));
    }

    return (
        <div>
            <h3>useState</h3>

            <h4>Todo</h4>

            <input
                type='text'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={addTodo}>
                Add
            </button>

            {list.map((v) => {
                return (
                    <li key={v.id}>
                        <span>{v.Todo}</span>
                        <button onClick={() => setTodo(v.Todo)}>
                            Edit
                        </button>

                        <button onClick={() => updateTodo(v.id)}>
                            Update
                        </button>

                        <button onClick={() => deleteTodo(v.id)}>
                            Delete
                        </button>
                    </li>
                )
            })}
        </div>
    )
}

export default HookuseState
