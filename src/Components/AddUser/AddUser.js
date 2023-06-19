import React, { useState } from "react";
import Card from "../UI/Card.js";

import "./AddUser.css";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitAddUser();
  };

  const listenOnChange = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });

    console.log(userInput);
    console.log(userInput["username"]);
    console.log(userInput["age"]);
  };

  return (
    <Card className="add-user">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(event) => listenOnChange("username", event.target.value)}
          value={userInput["username"]}
        ></input>

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={(event) => listenOnChange("age", event.target.value)}
          value={userInput["age"]}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
