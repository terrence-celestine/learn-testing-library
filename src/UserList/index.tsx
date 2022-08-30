import { useState, useEffect, useRef } from "react";
export const UserList = () => {
  type Name = {
    first: string;
    last: string;
  };
  type User = {
    gender: string;
    name: Name;
  };
  const [myUsers, setMyUsers] = useState<User[]>([]);
  const isInitialRender = useRef(true);
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    getUsers();
  }, []);

  const getUsers = async () => {
    await fetch("https://randomuser.me/api?results=1&inc=gender,name")
      .then((res: any) => res.json())
      .then((data) => {
        setMyUsers(data.results);
      });
  };

  const renderUsers = (users: any) => {
    return users.map((user: any) => <p key={user?.id}>{user?.name?.first}</p>);
  };

  return <>{myUsers?.length > 0 ? renderUsers(myUsers) : null}</>;
};
