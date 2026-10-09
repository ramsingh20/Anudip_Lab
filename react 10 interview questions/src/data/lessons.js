export const lessons = [
  {
    id: "rerender",
    number: "01",
    title: "Prevent unnecessary re-renders",
    shortTitle: "Re-renders",
    level: "React performance",
    time: "5 min",
    question: "How do you prevent unnecessary re-renders in a React app?",
    analogy:
      "Think of a component as a shop. React checks whether its props changed before asking a memoized shop to update its display.",
    explanation:
      "A re-render is React running a component again to update the screen. First find the slow or frequently re-rendering component with React DevTools. Then use React.memo to skip work when props are unchanged, useMemo to keep an expensive value, and useCallback to keep a function stable when passing it to a child.",
    steps: [
      "Measure first with React DevTools.",
      "Keep state close to the component that needs it.",
      "Memoize only when it avoids real work.",
    ],
    memory: "Measure, then memoize. Do not optimize by guessing.",
    mistake:
      "Memoization is not a default setting. A component can still render when its own state or a context value it uses changes.",
    code: `const UserCard = memo(function UserCard({ user }) {
  return <p>{user.name}</p>;
});

function App() {
  const [count, setCount] = useState(0);
  const user = useMemo(() => ({ name: "Sam" }), []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <UserCard user={user} />
    </>
  );
}`,
    interview:
      "I first use React DevTools to find what is re-rendering. If a child receives the same props, React.memo can skip its render. I use useMemo for expensive values and useCallback for functions passed to memoized children, but only when measuring shows a benefit.",
    followUp:
      "React.memo compares props, while useMemo caches a value and useCallback caches a function reference.",
    demo: "rerender",
  },
  {
    id: "debounce",
    number: "02",
    title: "Build a debounced search",
    shortTitle: "Debounced search",
    level: "Effects and events",
    time: "4 min",
    question: "How would you implement a debounced search input?",
    analogy:
      "A debounce is like waiting for someone to finish a sentence before replying. Each new keystroke restarts the waiting timer.",
    explanation:
      "The input should update immediately so it feels responsive. The search request waits until the user pauses typing. If another key is pressed first, the effect cleanup clears the old timer. This prevents a request for every letter.",
    steps: [
      "Store the text in state.",
      "Start a short timer in useEffect.",
      "Clear the timer when the text changes.",
      "Search only when the timer finishes.",
    ],
    memory: "Type now, wait, then search.",
    mistake:
      "Encode user input with encodeURIComponent before adding it to a URL, and handle loading and request errors in a real app.",
    code: `useEffect(() => {
  if (!query.trim()) {
    setResults([]);
    return;
  }

  const timer = setTimeout(() => {
    searchProducts(query);
  }, 500);

  return () => clearTimeout(timer);
}, [query]);`,
    interview:
      "I keep the input controlled with state, then use an effect to start a timer after the query changes. The cleanup clears the previous timer, so the search runs only after the user pauses typing. This reduces unnecessary API calls.",
    followUp:
      "Debounce waits until events stop; throttle allows an event at most once during a time window.",
    demo: "debounce",
  },
  {
    id: "api",
    number: "03",
    title: "Handle API states",
    shortTitle: "API states",
    level: "Data fetching",
    time: "5 min",
    question: "How do you show loading, success, and error states for an API request?",
    analogy:
      "An API request is like ordering food: show that the order is in progress, show the meal when it arrives, or explain what went wrong.",
    explanation:
      "Keep the data, loading flag, and error message in state. Start loading before the request, check response.ok because fetch does not reject for HTTP errors like 404, then save the data. A finally block always turns loading off.",
    steps: [
      "Set loading to true and clear an old error.",
      "Fetch data and check response.ok.",
      "Save the result or an error message.",
      "Set loading to false in finally.",
    ],
    memory: "Loading -> success or error -> done.",
    mistake:
      "A network request can fail even when the component is correct. Do not forget HTTP status checks or a useful error state.",
    code: `try {
  setLoading(true);
  setError(null);

  const response = await fetch("/api/users");
  if (!response.ok) throw new Error("Could not load users");

  setUsers(await response.json());
} catch (error) {
  setError(error.message);
} finally {
  setLoading(false);
}`,
    interview:
      "I model the request with data, loading, and error state. I check response.ok, save the result on success, show a clear message on failure, and use finally to stop the loading indicator in either case.",
    followUp:
      "Fetch rejects for network errors, but not for HTTP error responses. Check response.ok yourself.",
    demo: "api",
  },
  {
    id: "cancel",
    number: "04",
    title: "Cancel an API request",
    shortTitle: "Cancel requests",
    level: "Effects and cleanup",
    time: "4 min",
    question: "How do you cancel a request when a component unmounts?",
    analogy:
      "If you leave a queue, cancel your order. There is no reason to keep preparing something you will no longer use.",
    explanation:
      "Create an AbortController inside the effect and pass its signal to fetch. When the component unmounts, the effect cleanup calls abort(). If a request was cancelled, handle AbortError separately from a real failure.",
    steps: [
      "Create an AbortController for the request.",
      "Pass controller.signal to fetch.",
      "Abort in the effect cleanup.",
      "Do not show cancellation as an error to the user.",
    ],
    memory: "Create, connect, clean up.",
    mistake:
      "Do not swallow every error. Ignore AbortError, but report real network or server failures.",
    code: `useEffect(() => {
  const controller = new AbortController();

  fetch("/api/users", { signal: controller.signal })
    .then((response) => response.json())
    .then(setUsers)
    .catch((error) => {
      if (error.name !== "AbortError") setError(error.message);
    });

  return () => controller.abort();
}, []);`,
    interview:
      "I create an AbortController in the effect and pass its signal to fetch. The cleanup aborts the request when the component unmounts or the effect needs to run again. I treat AbortError as expected cancellation, not as a user-facing failure.",
    followUp:
      "Cancellation also helps when a search query changes before the earlier request has finished.",
    demo: "cancel",
  },
  {
    id: "pagination",
    number: "05",
    title: "Add pagination",
    shortTitle: "Pagination",
    level: "Working with lists",
    time: "4 min",
    question: "How would you implement pagination in React?",
    analogy:
      "A book is easier to read one page at a time than as one enormous sheet. Pagination shows a small, numbered part of a larger list.",
    explanation:
      "Store the current page in state. When it changes, request that page from the API. For a page size of 10, the starting item is (page - 1) * 10. Use the total item count to know the last page and disable buttons at the boundaries.",
    steps: [
      "Track the current page and page size.",
      "Fetch data when the page changes.",
      "Calculate total pages from the API total.",
      "Disable Previous and Next at the ends.",
    ],
    memory: "Page state chooses the slice.",
    mistake:
      "Use the API's total or hasNextPage value. Otherwise users may be able to click past the last page.",
    code: `const limit = 10;
const skip = (page - 1) * limit;

useEffect(() => {
  fetch(\`/api/products?limit=\${limit}&skip=\${skip}\`)
    .then((response) => response.json())
    .then((data) => {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / limit));
    });
}, [page]);`,
    interview:
      "I keep the current page in state and fetch whenever it changes. I calculate the offset from the page and page size, then use the total from the API to calculate the last page and disable navigation when needed.",
    followUp:
      "For page 1 with 10 items per page, skip is 0. For page 2, skip is 10.",
    demo: "pagination",
  },
  {
    id: "infinite",
    number: "06",
    title: "Create infinite scrolling",
    shortTitle: "Infinite scrolling",
    level: "Working with lists",
    time: "5 min",
    question: "How would you implement infinite scrolling?",
    analogy:
      "It is like a book that adds the next page when you reach the bottom of the current one.",
    explanation:
      "Place a small sentinel element after the list and watch it with IntersectionObserver. When it becomes visible, load the next page. Stop when there is no more data, and guard against starting another request while one is already loading.",
    steps: [
      "Keep the page, loading, and hasMore values.",
      "Observe a sentinel near the end of the list.",
      "Load and append the next batch when it appears.",
      "Disconnect the observer during cleanup.",
    ],
    memory: "See the sentinel? Fetch the next batch.",
    mistake:
      "Always prevent duplicate requests and disconnect the observer. Also provide a clear end-of-list state.",
    code: `useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && hasMore && !loading) {
      setPage((current) => current + 1);
    }
  });

  if (sentinelRef.current) observer.observe(sentinelRef.current);
  return () => observer.disconnect();
}, [hasMore, loading]);`,
    interview:
      "I use IntersectionObserver on a sentinel at the bottom of the list. When it enters view, I fetch and append the next page, as long as a request is not already running and more data exists. I disconnect the observer in cleanup.",
    followUp:
      "Compared with a scroll handler, IntersectionObserver avoids repeatedly checking scroll position.",
    demo: "infinite",
  },
  {
    id: "large-list",
    number: "07",
    title: "Optimize a very large list",
    shortTitle: "Large lists",
    level: "React performance",
    time: "5 min",
    question: "How would you optimize a list with 10,000 or more items?",
    analogy:
      "A shop window shows only the products you can see, not every product in the warehouse. Virtualization does the same for a long list.",
    explanation:
      "The biggest cost is often creating thousands of DOM elements. Virtualization renders only the visible rows plus a few nearby rows. Libraries such as react-window can do this for production lists. React.memo may reduce repeated row work, but it does not remove the DOM cost.",
    steps: [
      "Measure rendering and scrolling first.",
      "Virtualize so only visible rows are mounted.",
      "Use stable keys and keep row rendering inexpensive.",
      "Use memoization only when it prevents measured work.",
    ],
    memory: "Large list? Show the window, not the warehouse.",
    mistake:
      "React.memo alone still leaves 10,000 DOM elements on the page. For a very large list, virtualization is the key improvement.",
    code: `// A virtual list renders only the visible range.
const visibleItems = items.slice(startIndex, endIndex);

return (
  <div style={{ height: totalHeight, position: "relative" }}>
    <div style={{ transform: \`translateY(\${startIndex * rowHeight}px)\` }}>
      {visibleItems.map((item) => (
        <Row key={item.id} item={item} />
      ))}
    </div>
  </div>
);`,
    interview:
      "For 10,000 or more items, I would use list virtualization so the DOM contains only the visible rows. I would also measure with React DevTools, use stable keys, and memoize rows only if it helps. Memoization alone does not reduce the number of DOM nodes.",
    followUp:
      "Pagination and infinite loading reduce how much data is fetched; virtualization reduces how many rows are rendered at once.",
    demo: "large-list",
  },
  {
    id: "cart",
    number: "08",
    title: "Manage shopping cart state",
    shortTitle: "Cart state",
    level: "State management",
    time: "5 min",
    question: "How would you manage state for a shopping cart?",
    analogy:
      "A reducer is a cashier: it receives one clear action, updates the cart rules, and returns the new cart.",
    explanation:
      "A cart has related actions such as adding an item, changing quantity, and removing an item. useReducer keeps those updates together in one reducer. For a small cart, useState can also be enough; share the state with Context only if many parts of the app need it.",
    steps: [
      "Describe each user action with an action type.",
      "Update the cart immutably in the reducer.",
      "Call dispatch from buttons and controls.",
      "Keep totals derived from the cart items.",
    ],
    memory: "Action in, new state out.",
    mistake:
      "Do not mutate the existing array or item. Return new objects and arrays so React can detect the update.",
    code: `function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, items: [...state.items, action.product] };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}`,
    interview:
      "I would use useReducer because a cart has several related actions, such as add, remove, and update quantity. Each action goes through one reducer, which returns new state without mutating the old state. If many distant components need the cart, I can share it with Context.",
    followUp:
      "useReducer organizes complex updates; Context can share that state across a component tree.",
    demo: "cart",
  },
  {
    id: "cart-crud",
    number: "09",
    title: "Update cart items and total",
    shortTitle: "Cart totals",
    level: "State and derived data",
    time: "4 min",
    question: "How do you add, remove, update quantity, and calculate a cart total?",
    analogy:
      "The cart items are the receipt. The total is the sum at the bottom, so calculate it from the receipt instead of keeping a second receipt total in sync.",
    explanation:
      "Use map to update an item's quantity and filter to remove an item. Calculate the total with reduce from price multiplied by quantity. The total is derived data, so it should not be stored separately in state.",
    steps: [
      "Add a new item, or increase quantity if it is already in the cart.",
      "Use map to update and filter to delete.",
      "Calculate total from price * quantity.",
      "Choose what happens when quantity reaches zero.",
    ],
    memory: "Store the items; calculate the total.",
    mistake:
      "Storing both items and total can make them disagree. Keep one source of truth and derive the total.",
    code: `const total = items.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const updatedItems = items.map((item) =>
  item.id === id
    ? { ...item, quantity: item.quantity + 1 }
    : item
);`,
    interview:
      "I update cart items immutably with map and filter. I calculate the total with reduce using price times quantity instead of storing a separate total in state. That keeps the items as the single source of truth.",
    followUp:
      "The reducer in the live demo removes an item when its quantity reaches zero.",
    demo: "cart",
  },
  {
    id: "todo",
    number: "10",
    title: "Build a Todo app",
    shortTitle: "Todo app",
    level: "Putting it together",
    time: "6 min",
    question: "How would you build a Todo app with add, edit, delete, and complete actions?",
    analogy:
      "Each todo is a small card with its own ID. Actions find that card and return an updated list without changing the old list.",
    explanation:
      "Keep the todo list in state. Give every todo a stable ID, use map to edit or toggle one item, and use filter to delete one. Use a controlled input for the form and a functional state update when the next list depends on the previous list.",
    steps: [
      "Create a todo with a unique ID and completed: false.",
      "Use map to edit or toggle a todo.",
      "Use filter to delete by ID.",
      "Render each row with its stable ID as the key.",
    ],
    memory: "Add with spread, change with map, remove with filter.",
    mistake:
      "Do not use the array position as a key for a list that can change. A stable ID helps React match each todo to the right row.",
    code: `const toggleTodo = (id) => {
  setTodos((current) =>
    current.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};

const deleteTodo = (id) =>
  setTodos((current) => current.filter((todo) => todo.id !== id));`,
    interview:
      "I keep todos in state and give each one a stable ID. I add with a functional state update, use map to edit or toggle one todo, and use filter to delete. This keeps updates immutable and predictable.",
    followUp:
      "A controlled input gets its value from React state and updates that state in onChange.",
    demo: "todo",
  },
];
