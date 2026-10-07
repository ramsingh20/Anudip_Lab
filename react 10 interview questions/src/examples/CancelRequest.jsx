import { useEffect, useState } from "react";

function CancelRequest() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/users",
          {
            signal: controller.signal,
          }
        );

        const data = await response.json();

        setUsers(data.users);
        setStatus("Success");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request cancelled");
        } else {
          setStatus("Failed");
        }
      }
    };

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2>Cancel API Request</h2>

      <p>Status: {status}</p>

      {users.map((user) => (
        <div className="item" key={user.id}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </>
  );
}

export default CancelRequest;
