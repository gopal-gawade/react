import React, { useState } from 'react'

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

const SearchInNested = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const searchInNested = (data, term) => {
    let results = [];

    for (const item of data) {
      if (item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())) {
        results.push(item);
      }

      if (item.children) {
        results = results.concat(searchInNested(item.children, term))
      }
    }

    return results;
  }

  const handleSearch = (e) => {
    const search = e.target.value;
    setQuery(search)

    if (search) {
      const results = searchInNested(categoryTree, search);
      setResult(results);
    }
    else {
      setResult([]);
    }
  }

  return (
    <div>
      <h3>Search in nested</h3>

      <input
        type='text'
        placeholder='Search'
        value={query}
        onChange={handleSearch}
      />

      <ul>
        {result.map((v) => {
          return (
            <li key={v.id}>
              <p> {v.name}</p>

              <ul>
                {result.children && result.children.map((v) => {
                  <li key={v.id}>
                    <p> {v.name}</p>
                  </li>
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SearchInNested
