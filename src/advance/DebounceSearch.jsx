import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const useDebounceFunc = (val, delay) => {
    const [debounce, setDebounce] = useState(val);
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            clearTimeout(ref.current)
        }

        ref.current = setTimeout(() => {
            setDebounce(val);
        }, delay)

        return () => clearTimeout(ref.current)
    }, [val, delay]);

    return debounce;
}

const DebounceSearch = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProduct = async (debounceTerm) => {
        setLoading(true);
        try {
            const res = await axios.get(`https://dummyjson.com/products/search?q=${debounceTerm}`);
            const data = await res.data;
            setResult(data?.products)
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
        }
    }

    const debounceTerm = useDebounceFunc(search, 1000);

    useEffect(() => {
        if (!debounceTerm.trim()) {
            setResult([])
        }
        fetchProduct(debounceTerm);
    }, [debounceTerm])

    return (
        <div>
            <h3>Debounce Search</h3>

            <input
                type='text'
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading ?
                <p>Loading...</p> :
                <ul>
                    {result?.map((v) => {
                        return (
                            <li key={v.id}>
                                {v.title}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default DebounceSearch
