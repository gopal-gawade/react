import React, { useReducer, useState } from 'react'

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: Math.random(), todo: action.value, done: false }]
    case 'edit':
      return state.map((v) => v.id === action.id ? { ...v, todo: action.value } : v);
    case 'delete':
      return state.filter((v) => v.id !== action.id);
    case 'done':
      return state.map((v) => v.id === action.id ? { ...v, done: !v.done } : v);
    default:
      return state;
  }
}

const TodoList = () => {
  const [todoList, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");
  const [id, setId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'add', value: text.trim() })
      setText("");
    }
  }

  const editTodo = () => {
    if (editText.trim()) {
      dispatch({ type: 'edit', id: id, value: editText.trim() })
      setId("");
      setEditText("");
    }
  }

  return (
    <div>
      <h3>Todo List</h3>

      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ol>
        {todoList.map((v) => {
          return (
            <li key={v.id}>
              {id === v.id ?
                <>
                  <input
                    type='text'
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />

                  <button onClick={editTodo}>
                    Save
                  </button>
                </> :
                <>
                  {v.todo}

                  <input
                    type='checkbox'
                    checked={v.done}
                    onClick={() => dispatch({ type: 'done', id: v.id })}
                  />

                  <button onClick={() => { setEditText(v.todo); setId(v.id) }}>
                    Edit
                  </button>

                  <button onClick={() => dispatch({ type: 'delete', id: v.id })}>
                    Delete
                  </button>
                </>
              }
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default TodoList
