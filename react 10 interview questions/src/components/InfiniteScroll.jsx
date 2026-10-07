import { useEffect, useRef, useState } from "react";

const LIMIT = 10;

function InfiniteScroll() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (loading || !hasMore) return;

      setLoading(true);

      const skip = page * LIMIT;

      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
        );

        const data = await response.json();

        setProducts((previous) => [
          ...previous,
          ...data.products,
        ]);

        setHasMore(skip + data.products.length < data.total);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasMore &&
          !loading
        ) {
          setPage((value) => value + 1);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const element = loaderRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <>
      <h2>Infinite Scroll</h2>

      {products.map((product) => (
        <div className="item" key={product.id}>
          {product.title}
        </div>
      ))}

      <div ref={loaderRef} className="loader">
        {loading
          ? "Loading..."
          : hasMore
          ? "Scroll for more"
          : "No more products"}
      </div>
    </>
  );
}

export default InfiniteScroll;
