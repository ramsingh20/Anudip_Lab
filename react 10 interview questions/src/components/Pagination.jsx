import { useEffect, useState } from "react";

const LIMIT = 10;

function Pagination() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const skip = (page - 1) * LIMIT;

      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );

      const data = await response.json();

      setProducts(data.products);
      setTotal(data.total);
    };

    fetchProducts();
  }, [page]);

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <>
      <h2>Pagination</h2>

      {products.map((product) => (
        <div className="item" key={product.id}>
          {product.title}
        </div>
      ))}

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage((value) => value - 1)}
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((value) => value + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
