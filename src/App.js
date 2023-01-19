import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [addedUser, setAddedUser] = useState([]);

  const addNewUser = (uName, uAge) => {
    setAddedUser((prevUser) => {
      return [...prevUser, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser addFunction={addNewUser} />
      <UserList users={addedUser} />
    </div>
  );
}

export default App;
