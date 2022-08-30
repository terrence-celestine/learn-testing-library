import { useState, useEffect, useRef } from "react";
export const UserList = () => {
  const [users, setUsers] = useState(["user 1"]);
  const [myUsers, setMyUsers] = useState([]);
  const isInitialRender = useRef(true);
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    getUsers();
  }, []);

  const getUsers = async () => {
    await fetch("https://randomuser.me/api?results=1")
      .then((res: any) => res.json())
      .then((data) => {
        setMyUsers(data.results);
      });
  };

  const addUser = (e: any, username: string) => {
    e.preventDefault();
    setUsers((prevState) => [...prevState, username]);
  };

  const renderUsers = (users: any) => {
    return users.map((user: any) => <p key={user?.id}>{user?.name?.first}</p>);
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
          onClick={(e) => addUser(e, "test user")}
          type="submit"
          value="Add User"
        />
      </form>
      {myUsers?.length > 0 ? renderUsers(myUsers) : null}
    </>
  );
};
