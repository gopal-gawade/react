import axios from "axios";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 5;
  const totalPages = Math.ceil(totalProducts / limit);

  const fetchProducts = async (pageNumber) => {
    setLoading(true);
    try {
      const skip = (pageNumber - 1) * limit;
      const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      setProducts(data.products.slice(0, 25));
      setTotalProducts(25);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <div>
      <h3>Pagination</h3>

      {loading ?
        <p>Loading...</p> :
        <ul>
          {products.map((v) => {
            return (
              <li key={v.id}>
                {v.title}
              </li>
            )
          })}
        </ul>
      }

      <div style={{ display: "flex", gap: "4px" }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          {"<"}
        </button>

        {[...Array(totalPages)].map((v, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            style={{ color: page === i + 1 ? "blue" : "black" }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
