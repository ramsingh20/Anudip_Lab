React Interview Lab

A collection of practical React implementations for common frontend interview questions.

## Beginner-Friendly Learning Flow

Each of the 10 questions is taught in three short steps:

1. **Understand** the idea with a plain-English explanation, an everyday analogy, a small code example, and a memory tip.
2. **Try it** in an interactive React demo.
3. **Practice your answer** with a concise response and a follow-up interview point.

Use the lesson search or move through the course with the previous and next controls. Mark lessons as learned to track your progress.

🚀 Topics Covered

Prevent unnecessary React re-renders

Debounced search input

API loading, success and error states

Cancel API requests with AbortController

Pagination

Infinite scrolling

Optimizing large lists

Shopping cart state management

Shopping cart CRUD operations

Todo application

🛠️ Tech Stack

React

JavaScript

Vite

React Hooks

Fetch API

IntersectionObserver

📂 Project Structure
src/
├── components/
│   ├── DebouncedSearch.jsx
│   ├── InfiniteScroll.jsx
│   ├── LargeList.jsx
│   ├── Pagination.jsx
│   ├── ShoppingCart.jsx
│   └── TodoApp.jsx
│
├── data/
│   └── lessons.js
│
├── examples/
│   ├── ApiStates.jsx
│   ├── CancelRequest.jsx
│   └── PreventRerenders.jsx
│
├── App.jsx
├── App.css
└── main.jsx

📚 Interview Concepts
Preventing Re-renders

Uses:

React.memo

useMemo

useCallback

Component composition

Debouncing

Uses setTimeout and useEffect cleanup to delay API requests until the user stops typing.

API State Management

Demonstrates:

Loading state

Success state

Error state

finally cleanup

Request Cancellation

Uses AbortController to cancel requests when the component unmounts.

Pagination

Uses page state and API limit/skip parameters.

Infinite Scrolling

Uses IntersectionObserver to detect when the user reaches the bottom of the list.

Large Lists

Demonstrates list virtualization by rendering only visible rows from a 10,000-item list. Memoization alone does not reduce the number of DOM elements.

Shopping Cart

Uses useReducer to handle:

Add item

Delete item

Increase quantity

Decrease quantity

Calculate total

Todo

Supports:

Add

Edit

Delete

Complete/uncomplete

🎯 Interview Goal

The purpose of this project is to demonstrate both theoretical & practical React knowledge answers.

Each implementation can be explained during a technical interview by discussing:

The problem

The React approach

Why the approach was selected

Performance considerations

## Run Locally

```bash
npm install
npm run dev
```
