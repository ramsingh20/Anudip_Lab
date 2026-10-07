import {
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";

const UserCard = memo(function UserCard({ user, onSelect }) {
  console.log("UserCard rendered");

  return (
    <div className="item">
      <strong>{user.name}</strong>

      <button onClick={() => onSelect(user)}>
        Select
      </button>
    </div>
  );
});

function PreventRerenders() {
  const [count, setCount] = useState(0);

  const user = useMemo(
    () => ({
      id: 1,
      name: "John Doe",
    }),
    []
  );

  const handleSelect = useCallback((user) => {
    alert(`Selected ${user.name}`);
  }, []);

  return (
    <>
      <h2>Prevent Unnecessary Re-renders</h2>

      <p>
        React.memo prevents the child from rendering when its
        props have not changed.
      </p>

      <button onClick={() => setCount((value) => value + 1)}>
        Parent Count: {count}
      </button>

      <UserCard
        user={user}
        onSelect={handleSelect}
      />

      <div className="explanation">
        <h3>Techniques</h3>

        <ul>
          <li>React.memo</li>
          <li>useMemo</li>
          <li>useCallback</li>
          <li>Keep state close to where it is needed</li>
          <li>Split large components</li>
        </ul>
      </div>
    </>
  );
}

export default PreventRerenders;
