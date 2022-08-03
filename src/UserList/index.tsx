import { useState } from "react";
export const UserList = () => {
  const [users, setUsers] = useState(["user 1"]);
  const addUser = (username: string) => {
    setUsers((prevState) => [...prevState, username]);
  };
  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <button onClick={() => addUser("test user")}>Add User</button>
    </>
  );
};
