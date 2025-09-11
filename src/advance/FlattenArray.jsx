import React, { useEffect, useState } from 'react'

const categoryTree = [
    {
        id: "fashion",
        name: "Fashion",
        children: [
            {
                id: "mens",
                name: "Men's Fashion",
                children: [
                    { id: "shirts", name: "Shirts" },
                    { id: "pants", name: "Pants" },
                    {
                        id: "accessories",
                        name: "Accessories",
                        children: [
                            { id: "belts", name: "Belts" },
                            { id: "watches", name: "Watches" },
                            { id: "hats", name: "Hats" },
                        ],
                    },
                ],
            },
            {
                id: "womens",
                name: "Women's Fashion",
                children: [
                    { id: "dresses", name: "Dresses" },
                    { id: "skirts", name: "Skirts" },
                    {
                        id: "footwear",
                        name: "Footwear",
                        children: [
                            { id: "heels", name: "Heels" },
                            { id: "flats", name: "Flats" },
                            { id: "sneakers", name: "Sneakers" },
                        ],
                    },
                ],
            },
        ],
    },
];

const FlattenArray = () => {
    const [category, setCategories] = useState([]);
    const [selected, setSelected] = useState("");

    const flattenArray = (categories) => {
        const result = [];

        const processCategory = (category) => {
            const { children, ...categoryWithoutChildren } = category;
            result.push(categoryWithoutChildren);

            if (children && children.length > 0) {
                for (const childItem of children) {
                    processCategory(childItem)
                }
            }
        }

        for (const category of categories) {
            processCategory(category)
        }

        return result;
    }

    useEffect(() => {
        const result = flattenArray(categoryTree);
        setCategories(result);
    }, []);

    const handleCategory = (e) => {
        setSelected(e.target.value)
    }

    console.log(selected);

    return (
        <div>
            <h3>Flatten Array</h3>
            <select onChange={handleCategory}>
                <option value={"all"}>
                    All categories
                </option>

                {category.map((v) => {
                    return (
                        <option key={v.id}>
                            {v.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default FlattenArray
