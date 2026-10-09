import { memo, useMemo, useState } from "react";

const ROW_HEIGHT = 36;
const LIST_HEIGHT = 260;
const OVERSCAN = 4;

const Item = memo(function Item({ item, top }) {
  return (
    <div
      className="item virtual-row"
      role="listitem"
      style={{ height: ROW_HEIGHT, top }}
    >
      Item #{item}
    </div>
  );
});

function LargeList() {
  const [renderCount, setRenderCount] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const items = useMemo(
    () => Array.from({ length: 10000 }, (_, index) => index + 1),
    [],
  );

  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN,
  );
  const visibleCount = Math.ceil(LIST_HEIGHT / ROW_HEIGHT) + OVERSCAN * 2;
  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <>
      <h2>Virtualized Large List</h2>

      <button onClick={() => setRenderCount((value) => value + 1)}>
        Re-render Parent: {renderCount}
      </button>

      <p>
        10,000 items in the data, but only {visibleItems.length} rows are
        mounted. Scroll to see virtualization at work.
      </p>

      <div
        className="large-list"
        onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
        aria-label="Virtualized list of 10,000 items"
        role="list"
      >
        <div
          className="virtual-spacer"
          style={{ height: items.length * ROW_HEIGHT }}
        >
          {visibleItems.map((item, index) => (
            <Item
              key={item}
              item={item}
              top={(startIndex + index) * ROW_HEIGHT}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default LargeList;
