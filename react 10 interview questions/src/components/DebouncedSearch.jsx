import { useEffect, useState } from "react";

function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(
            query
          )}`
        );

        const data = await response.json();

        setResults(data.products || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <h2>Debounced Search</h2>

      <input
        className="input"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search products..."
      />

      {loading && <p>Searching...</p>}

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
