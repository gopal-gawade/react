import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

export const productContext = createContext(null);

const ProviderContext = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const res = await axios.get('https://dummyjson.com/products');
            const data = await res.data;
            setList(data?.products);
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <productContext.Provider value={{ loading, list }}>
            {children}
        </productContext.Provider>
    )
}

export const useProducts = () => useContext(productContext);

export default ProviderContext
