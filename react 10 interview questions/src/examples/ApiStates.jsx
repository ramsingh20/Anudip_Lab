import { useEffect, useState } from "react";

function ApiStates() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://dummyjson.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data.users);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return (
      <>
        <h2>API States</h2>
        <p className="error">{error}</p>
      </>
    );
  }

  return (
    <>
      <h2>API Loading / Success / Error</h2>

      {users.map((user) => (
        <div className="item" key={user.id}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </>
  );
}

export default ApiStates;
