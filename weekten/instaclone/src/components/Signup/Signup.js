import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signUp } from "../../utils";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import "./Signup.scss";

const Signup = ({ setter }) => {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [verification, setVerification] = useState(0);

  const navigate = useNavigate();

  console.log(
    page,
    email,
    fullname,
    username,
    password,
    birthday,
    verification
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(
      username,
      email,
      password,
      fullname,
      birthday,
      verification,
      setter
    );
    navigate("/");
  };

  const handleNextButton = (page) => {
    switch (page) {
      case 0:
        if (
          email !== "" &&
          fullname !== "" &&
          username !== "" &&
          password !== ""
        ) {
          return "btn btn-primary";
        } else {
          return "btn btn-primary disabled";
        }
      case 1:
        if (birthday !== "") {
          return "btn btn-primary";
        } else {
          return "btn btn-primary disabled";
        }
      case 2:
        if (verification !== "") {
          return "btn btn-primary";
        } else {
          return "btn btn-primary disabled";
        }
    }
  };

  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col-md-3 mx-auto">
          <form className="border border-1 p-4 mb-3" onSubmit={handleSubmit}>
            {page === 0 ? (
              <StepOne
                setEmail={setEmail}
                setUsername={setUsername}
                setPassword={setPassword}
                setFullname={setFullname}
              />
            ) : page === 1 ? (
              <StepTwo setBirthday={setBirthday} />
            ) : page === 2 ? (
              <StepThree setVerification={setVerification} email={email} />
            ) : null}

            <div className="d-grid gap-2 mt-3">
              {(page === 0 || page === 1) && (
                <a
                  className={handleNextButton(page)}
                  onClick={() => setPage(page + 1)}
                >
                  next
                </a>
              )}
              {(page === 1 || page === 2) && (
                <a
                  className="link-primary app_form-cursor fw-bold text-decoration-none"
                  onClick={() => setPage(page - 1)}
                >
                  Go Back
                </a>
              )}
            </div>
          </form>

          <div className="border border-1 p-4">
            Have an account?{" "}
            <a href="/" className="link-primary text-decoration-none">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
