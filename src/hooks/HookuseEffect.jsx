import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HookuseEffect = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    const getData = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.data;
        setPost(data);
    }

    useEffect(() => {
        getData()
    }, [id])

    return (
        <div>
            <h3>useEffect</h3>

            <button onClick={() => setId(id + 1)}>
                {id}
            </button>

            <p>{post?.title}</p>
        </div>
    )
}

export default HookuseEffect
