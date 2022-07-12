import React, { useState } from "react";

import { signUp } from "../../utils";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import "./Signup.scss";

const Signup = ({ setter }) => {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(username, email, password, fullname, setter);
  };

  return (
    <div className="container mt-5 w-25 text-center">
      <form className="border border-1 p-4 mb-3" onSubmit={handleSubmit}>
        {page === 0 ? (
          <StepOne
            setEmail={setEmail}
            setUsername={setUsername}
            setPassword={setPassword}
            setFullname={setFullname}
          />
        ) : page === 1 ? (
          <StepTwo />
        ) : page === 2 ? (
          <StepThree />
        ) : null}

        <div className="d-grid gap-2 mt-3">
          {(page === 0 || page === 1) && (
            <button
              className="btn btn-primary"
              onClick={() => setPage(page + 1)}
            >
              next
            </button>
          )}
          {(page === 1 || page === 2) && (
            <span
              className="text-primary app_form-cursor"
              onClick={() => setPage(page - 1)}
            >
              Go Back
            </span>
          )}
        </div>
      </form>

      <div className="border border-1 p-4">
        Have an account?{" "}
        <a href="#" className="link-primary">
          Log in
        </a>
      </div>
    </div>
  );
};

export default Signup;
