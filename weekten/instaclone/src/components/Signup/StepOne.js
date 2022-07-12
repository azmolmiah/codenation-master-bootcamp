import React from "react";

import { images } from "../../constants";

const StepOne = ({ setEmail, setUsername, setPassword, setFullname }) => {
  return (
    <div>
      <img src={images.logo} alt="instagram logo" className="mb-3" />
      <h2 className="mb-3 fs-5 fw-bold text-secondary">
        Sign up to see photos and videos from your friends.
      </h2>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">
          <i className="fa-brands fa-facebook-square"></i> Log in with Facebook
        </button>
      </div>
      <div className="py-3 d-flex align-items-center">
        <hr className="flex-grow-1" />
        <div className="fw-bold mx-3">OR</div>
        <hr className="flex-grow-1" />
      </div>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <p className="fw-bold text-secondary app__form-details">
        People who use our service may have uploaded your contact information to
        Instagram.{" "}
        <a href="#" className="link-dark">
          Learn more
        </a>
      </p>

      <p className="fw-bold text-secondary app__form-details">
        By signing up, you agree to our{" "}
        <a href="#" className="link-dark">
          Terms
        </a>
        . Learn how we collect, use and share your data in our{" "}
        <a href="#" className="link-dark">
          Data Policy
        </a>
        , and how we use cookies and similar technology in our{" "}
        <a href="#" className="link-dark">
          Cookie Policy
        </a>
        .
      </p>
    </div>
  );
};

export default StepOne;
