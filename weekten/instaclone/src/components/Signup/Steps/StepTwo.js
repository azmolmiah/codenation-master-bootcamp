import React from "react";

const StepTwo = ({ setBirthday }) => {
  return (
    <div>
      <i className="fa-solid fa-cake-candles fa-5x mb-3"></i>
      <p className="fs-5 fw-bold">Add your date of birth</p>
      <div className="mb-3">
        <small>
          This won't be part of your public profile. <br />
          <a href="#">Why do I need to provide my date of birth?</a>
        </small>
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="dd-mm-yyyy"
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
    </div>
  );
};

export default StepTwo;
