import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useThrottleFunc = (value, delay) => {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastRun = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
            const now = Date.now();
            if (now - lastRun.current >= delay) {
                setThrottledValue(value);
                lastRun.current = now;
            }
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return throttledValue;
};

const ThrottleSearch = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const throttledSearch = useThrottleFunc(search, 1000);

    const fetchProducts = async (term) => {
        if (!term.trim()) return setResult([]);
        setLoading(true);
        try {
            const { data } = await axios.get(`https://dummyjson.com/products/search?q=${term}`);
            setResult(data.products);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(throttledSearch);
    }, [throttledSearch]);

    return (
        <div>
            <h3>Throttle search</h3>

            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading ?
                <p>Loading...</p> :
                <ul>
                    {result.map((v) => {
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

export default ThrottleSearch
