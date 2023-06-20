import React, { useState } from "react";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../ErrorModal/ErrorModal.js";
import "./AddUser.css";

const AddUser = (props) => {
  /*
  WAY 2 of using useState: we handle state for each element.  
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const listenOnChangeUsername = (event)=>{
    setEnteredUsername(event.target.value)
  }
  */

  const [error, setError] = useState();

  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      userInput["username"].trim() === "" ||
      +userInput["age"].trim() === ""
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      setUserInput({
        username: "",
        age: "",
      });
    } else if (+userInput["age"] < 1) {
      setError({
        title: "Invalid age",
        message: "PLease enter a valid age (> 0)",
      });
      setUserInput({
        username: "",
        age: "",
      });
    } else {
      props.onSubmitAddUser(userInput);
      setUserInput({
        username: "",
        age: "",
      });
    }
  };

  const listenOnChange = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error["title"]}
          message={error["message"]}
          closeError={handleCloseError}
        ></ErrorModal>
      )}
      <Card className="input">
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
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
