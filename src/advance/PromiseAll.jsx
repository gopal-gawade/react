import React, { useState } from 'react'

const customPromiseAll = (promises) => {
    return new Promise((res, rej) => {
        let results = [];
        let count = 0;
        const total = promises?.length;

        promises.forEach((promise, index) => {
            promise.then((result) => {
                results[index] = { status: 'fulfilled', value: result }
            }).catch((err) => {
                results[index] = { status: 'rejected', error: err }
            }).finally(() => {
                count++;
                if (count === total) {
                    res(results);
                }
            })
        })
    })
}

const PromiseAll = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState({ products: { value: [] }, users: { value: [] } });

    const fetchProducts = async () => {
        return fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => data.products)
            .catch((err) => "Error");
    }

    const fetchUsers = async () => {
        return fetch('https://dummyjson.com/users')
            .then((res) => res.json())
            .then((data) => data.users)
            .catch((err) => "Error");
    }

    const promises = [fetchProducts(), fetchUsers()];

    const handleFetchData = async () => {
        setLoading(true);
        try {
            const res = await customPromiseAll(promises);
            const combinedData = {
                products: res[0] || [],
                users: res[1] || []
            };
            setList(combinedData);
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
        }
    }

    return (
        <div>
            <h3>Promise.all</h3>

            <button onClick={handleFetchData}>
                Click here
            </button>

            <ul>
                {list.products.value?.slice(0, 5)?.map((v) => {
                    return (
                        <li key={v.id}>
                            {v.title}
                        </li>
                    )
                })}
            </ul>

            <ul>
                {list.users.value?.slice(0, 5)?.map((v) => {
                    return (
                        <li key={v.id}>
                            {v.firstName} {v.lastName}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PromiseAll
