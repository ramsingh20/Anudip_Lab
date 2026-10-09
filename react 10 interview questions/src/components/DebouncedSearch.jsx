import { useEffect, useState } from "react";

function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) return;

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(
            query
          )}`,
          { signal: controller.signal },
        );

        if (!response.ok) throw new Error("Could not search products.");

        const data = await response.json();
        setResults(data.products);
      } catch (error) {
        if (error.name !== "AbortError") setError(error.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <h2>Debounced Search</h2>

      <input
        className="input"
        value={query}
        onChange={(event) => {
          const value = event.target.value;
          setQuery(value);
          setLoading(false);
          if (!value.trim()) {
            setResults([]);
            setError("");
          }
        }}
        placeholder="Search products..."
      />

      {loading && <p>Searching...</p>}
      {error && <p className="error">{error}</p>}

      <div>
        {results.map((product) => (
          <div className="item" key={product.id}>
            {product.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default DebouncedSearch;
