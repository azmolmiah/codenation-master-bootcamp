import React from "react";

const StepThree = ({ email, setVerification }) => {
  return (
    <div>
      <i className="fa-solid fa-envelope fa-5x"></i>
      <p className="fs-5 fw-bold">Enter confirmation code</p>

      <p className="fs-6 ">
        Enter the confirmation code that we sent to {email}. <br />
        <a href="#" className="fs-6 fw-bold link-primary text-decoration-none">
          Resend code
        </a>
        .
      </p>

      <div className="input-group">
        <input
          type="text"
          aria-label="First name"
          className="form-control mb-3"
          placeholder="Confirmation code"
          onChange={(e) => setVerification(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default StepThree;
