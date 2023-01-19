import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState({});

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Empty input field",
        message: "You  should fill up all the input fields",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Entered age should be (>0), okay ?",
      });
      return;
    }

    props.addFunction(enteredUser, enteredAge);
    setEnteredUser("");
    setEnteredAge("");
  };
  const nameHandler = (e) => {
    setEnteredUser(e.target.value);
  };
  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={handleError} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={enteredUser} onChange={nameHandler} />
          <label htmlFor="age">Age (years)</label>
          <input type="number" id="age" value={enteredAge} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
