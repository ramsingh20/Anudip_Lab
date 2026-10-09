import { useEffect, useRef, useState } from "react";

const LIMIT = 10;

function InfiniteScroll() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  const loaderRef = useRef(null);
  const loadingRef = useRef(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      if (loadingRef.current || !hasMore) return;

      loadingRef.current = true;
      setLoading(true);
      setError("");

      const skip = page * LIMIT;

      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
          { signal: controller.signal },
        );

        if (!response.ok) throw new Error("Could not load more products.");

        const data = await response.json();

        setProducts((previous) => [...previous, ...data.products]);
        setHasMore(skip + data.products.length < data.total);
      } catch (error) {
        if (error.name !== "AbortError") setError(error.message);
      } finally {
        loadingRef.current = false;
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
      loadingRef.current = false;
    };
  }, [page, hasMore, retryCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0]?.isIntersecting &&
          hasMore &&
          !loading &&
          !error &&
          !loadingRef.current
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
  }, [error, hasMore, loading]);

  return (
    <>
      <h2>Infinite Scroll</h2>

      {products.map((product) => (
        <div className="item" key={product.id}>
          {product.title}
        </div>
      ))}

      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={() => setRetryCount((value) => value + 1)}>
            Try again
          </button>
        </div>
      )}

      <div ref={loaderRef} className="loader">
        {loading
          ? "Loading..."
          : error
          ? ""
          : hasMore
          ? "Scroll for more"
          : "No more products"}
      </div>
    </>
  );
}

export default InfiniteScroll;
