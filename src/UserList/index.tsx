import { useState } from "react";
export const UserList = () => {
  const [users, setUsers] = useState(["user 1"]);
  const addUser = (e: any, username: string) => {
    e.preventDefault();
    setUsers((prevState) => [...prevState, username]);
  };
  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <form>
        <input
          onClick={(e) => addUser(e,  "test user")}
          type="submit"
          value="Add User"
        />
      </form>
    </>
  );
};
