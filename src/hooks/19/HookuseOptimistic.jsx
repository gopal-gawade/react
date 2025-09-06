import React, { useOptimistic, useState } from 'react'

const HookuseOptimistic = () => {
    const [todos, setTodos] = useState([]);
    const [optimisticTodos, addNewTodo] = useOptimistic(todos,
        (state, newTodo) => {
            return [...state, newTodo];
        }
    )

    const waitFunc = async (val, duration) => {
        return await new Promise((res) => {
            setTimeout(() => {
                res(val)
            }, duration);
        })
    }

    const createTodo = async (val) => {
        return await waitFunc({
            id: Math.random(),
            todo: val
        }, 5000);
    }

    const onSubmit = async (data) => {
        const title = data.get('title');

        const optimisticTodo = {
            id: Math.random(),
            todo: `${String(title)} sending...`
        }
        addNewTodo(optimisticTodo);

        const newTodo = await createTodo(title);
        setTodos((prev) => [...prev, newTodo]);
    }

    return (
        <div>
            <form action={onSubmit}>
                <h3>useOptimistic</h3>

                <label>
                    Todo
                </label>
                <br />

                <input type="text" name="title" required />

                <button type="submit">
                    Add
                </button>
            </form>

            {optimisticTodos.map((v) => {
                return (
                    <p key={v.id}>
                        {v.todo}
                    </p>
                )
            })}
        </div>
    )
}

export default HookuseOptimistic
