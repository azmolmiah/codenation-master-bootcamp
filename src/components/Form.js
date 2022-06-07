import React from "react";

const Form = ({
  handleSubmit,
  nameInput,
  setNameInput,
  ageInput,
  setAgeInput,
}) => {
  return (
    <form
      style={{ marginTop: 2 + "rem", marginBottom: 2 + "rem" }}
      onSubmit={handleSubmit}
    >
      <label>
        Enter your name:
        <input
          type="text"
          name="name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="text"
          name="age"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
