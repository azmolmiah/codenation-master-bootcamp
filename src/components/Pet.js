import React from "react";

const Pet = ({ name, type }) => {
  return (
    <h5>
      my pet's name is {name} and it is a {type}
    </h5>
  );
};

export default Pet;
