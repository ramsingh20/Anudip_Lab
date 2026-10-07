import { memo, useMemo, useState } from "react";

const Item = memo(function Item({ item }) {
  return (
    <div className="item">
      Item #{item}
    </div>
  );
});

function LargeList() {
  const [count, setCount] = useState(10000);
  const [renderCount, setRenderCount] = useState(0);

  const items = useMemo(() => {
    return Array.from(
      { length: count },
      (_, index) => index + 1
    );
  }, [count]);

  return (
    <>
      <h2>Large List Optimization</h2>

      <button
        onClick={() =>
          setRenderCount((value) => value + 1)
        }
      >
        Re-render Parent: {renderCount}
      </button>

      <p>Items: {items.length}</p>

      <div className="large-list">
        {items.map((item) => (
          <Item key={item} item={item} />
        ))}
      </div>
    </>
  );
}

export default LargeList;
