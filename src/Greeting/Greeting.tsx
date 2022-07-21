import { FC, useState } from "react";

interface IGreeting {
  username?: string;
}
export const Greeting: FC<IGreeting> = ({ username }) => {
  const [greetingText, setGreetingText] = useState("Hello there");
  const handleChangeText = () => {
    setGreetingText("Hello Friend");
  };
  return (
    <div>
      <button onClick={handleChangeText}>Change Text</button>
      {username ? <h1>{"Hello " + username}</h1> : <h1>{greetingText}</h1>}
    </div>
  );
};
