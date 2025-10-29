import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [Friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <h1> Friends : {Friends.length} </h1>
      {
        Friends.map(friend => <Friend Friend={friend}></Friend>)
      }
    </div>
  );
}
