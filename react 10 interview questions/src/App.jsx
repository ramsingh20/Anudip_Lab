import { useState } from "react";
import "./App.css";

import PreventRerenders from "./examples/PreventRerenders";
import DebouncedSearch from "./components/DebouncedSearch";
import ApiStates from "./examples/ApiStates";
import CancelRequest from "./examples/CancelRequest";
import Pagination from "./components/Pagination";
import InfiniteScroll from "./components/InfiniteScroll";
import LargeList from "./components/LargeList";
import ShoppingCart from "./components/ShoppingCart";
import TodoApp from "./components/TodoApp";

const topics = [
  { id: "rerender", label: "1. How would you prevent unnecessary re-renders in a React application?" },
  { id: "debounce", label: "2. How would you implement a debounced search input in React?" },
  { id: "api", label: "3. How would you handle API loading, success, and error states?" },
  { id: "cancel", label: "4. How would you cancel an API request when a component unmounts?" },
  { id: "pagination", label: "5. How would you implement pagination in React?" },
  { id: "infinite", label: "6. How would you implement infinite scrolling?" },
  { id: "large-list", label: "7. How would you optimize a React application rendering 10,000+ items?" },
  { id: "cart", label: "8. How would you manage state for a shopping cart?" },
  { id: "cart-crud", label: "9. How would you implement add, delete, update quantity, and calculate total price in a shopping cart?" },
  { id: "todo", label: "10. How would you implement a Todo application with add, edit, delete, and complete functionality?" },
];

function App() {
  const [activeTopic, setActiveTopic] = useState("rerender");

  const renderTopic = () => {
    switch (activeTopic) {
      case "rerender":
        return <PreventRerenders />;

      case "debounce":
        return <DebouncedSearch />;

      case "api":
        return <ApiStates />;

      case "cancel":
        return <CancelRequest />;

      case "pagination":
        return <Pagination />;

      case "infinite":
        return <InfiniteScroll />;

      case "large-list":
        return <LargeList />;

      case "cart":
      case "cart-crud":
        return <ShoppingCart />;

      case "todo":
        return <TodoApp />;

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <h1>Anudip Lab</h1>

        <p className="subtitle">Interview Questions</p>

        <nav>
          {topics.map((topic) => (
            <button
              key={topic.id}
              className={
                activeTopic === topic.id ? "active" : ""
              }
              onClick={() => setActiveTopic(topic.id)}
            >
              {topic.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <header>
          <h2>React Interview Questions</h2>
          <p>
            Practical implementations of common React interview
            questions.
          </p>
        </header>

        <section className="card">{renderTopic()}</section>
      </main>
    </div>
  );
}

export default App;
