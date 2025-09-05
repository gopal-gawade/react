import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const useCustomHook = (id) => {
    const [post, setPost] = useState({});

    const getData = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.data;
        setPost(data);
    }

    useEffect(() => {
        getData()
    }, [id])

    return post;
}
