import React from "react";

import Pet from "./Pet";

const Person = ({ name, age, petsName, petType }) => {
  return (
    <>
      <h2>
        My name is {name}, my age is {age} and
      </h2>
      <Pet name={petsName} type={petType} />
    </>
  );
};

export default Person;
