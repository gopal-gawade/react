import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    post: {},
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch_loading':
            return {
                loading: true,
                post: {},
                error: ""
            }
        case 'fetch_success':
            return {
                loading: false,
                post: action.payload,
                error: ""
            }
        case 'fetch_error':
            return {
                loading: false,
                post: {},
                error: action.payload
            }
        default:
            return state;
    }
}

const HookuseReducerTwo = () => {
    const [post, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        dispatch({ type: 'fetch_loading' });
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            const data = await res.data;
            dispatch({ type: 'fetch_success', payload: data })
        }
        catch (err) {
            dispatch({ type: 'fetch_error', payload: "Error!" })
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <p>{post.post.title}</p>
        </div>
    )
}

export default HookuseReducerTwo
