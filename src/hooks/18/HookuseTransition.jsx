import React, { useState, useTransition } from 'react'

const arr = ["Samsung", "Apple", "Google", "Oneplus", "Motorola", "Oppo", "Vivo"]

const HookuseTransition = () => {
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState(arr);
    const [isPending, startTransition] = useTransition();

    const handleSearch = (e) => {
        const term = e.target.value.toLocaleLowerCase();
        setSearch(term);

        startTransition(() => {
            setTimeout(() => {
                const filteredArr = arr.filter((v) => v.toLocaleLowerCase().includes(search));
                setFiltered(filteredArr);
            }, 2000);
        })
    }

    return (
        <div>
            <input
                type='text'
                value={search}
                onChange={(e) => handleSearch(e)}
            />

            {isPending ?
                <p>Loading</p> :
                <div>
                    {filtered.map((v, i) => {
                        return (
                            <p key={i}>
                                {v}
                            </p>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default HookuseTransition
