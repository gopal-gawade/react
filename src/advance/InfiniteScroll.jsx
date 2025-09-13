import axios from "axios";
import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    if (loading || !hasMore) {
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`);
      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + 10);
      if (data.products.length === 0) {
        setHasMore(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        fetchProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skip, hasMore, loading]);

  return (
    <div>
      <h3>Infinite scroll</h3>

      <ul>
        {products.map((v, i) => {
          return (
            <li key={i}>
              {v.title}
            </li>
          )
        })}
      </ul>

      {loading &&
        <p>Loading more...</p>
      }

      {!hasMore &&
        <p>No more products available.</p>
      }
    </div>
  );
};

export default InfiniteScroll;
