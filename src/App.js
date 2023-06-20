import React, { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddUser from "./Components/AddUser/AddUser";
import UsersList from "./Components/UsersList/UsersList.js";
import ErrorModal from "./Components/ErrorModal/ErrorModal";

let listOfUsers = [
  {
    id: uuidv4(),
    username: "Beqo",
    age: 25,
  },
];

function App() {
  const [userList, setUserList] = useState(listOfUsers);

  const storeUser = (user) => {
    setUserList((prevUser) => {
      return [...prevUser, { id: uuidv4(), ...user }];
    });

    console.log(userList);
  };
  console.log(userList);
  return (
    <div>
      <AddUser onSubmitAddUser={storeUser}></AddUser>

      {listOfUsers.length > 0 ? (
        <UsersList data={userList}></UsersList>
      ) : (
        <p style={{ color: "white", textAlign: "center" }}>No users added!</p>
      )}
    </div>
  );
}

export default App;
