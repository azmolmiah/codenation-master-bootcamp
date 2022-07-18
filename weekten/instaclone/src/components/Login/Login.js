import React, { useState } from "react";

import { images } from "../../assets";
import { login } from "../../utils";

const Login = ({ setter }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password, setter);
  };

  return (
    <div className="d-flex">
      <div className="container text-center">
        <div className="row mt-5">
          <div className="col-6 d-flex justify-content-end">
            <img src={images.phone} alt="iphonex" className="w-75" />
          </div>
          <div className="col-6 w-25 mt-4">
            <form className="border border-1 p-4 mb-3" onSubmit={handleSubmit}>
              <img src={images.logo} alt="instagram logo" className="mb-4" />
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number, username or email address"
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
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary fw-bold">
                  Log In
                </button>
              </div>

              <div className="py-3 d-flex align-items-center">
                <hr className="flex-grow-1" />
                <div className="fw-bold mx-3">OR</div>
                <hr className="flex-grow-1" />
              </div>

              <p>
                <a href="#" className="text-decoration-none fw-bold">
                  {" "}
                  <i className="fa-brands fa-facebook-square"></i> Log in with
                  Facebook
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none">
                  Forgotten your password?
                </a>
              </p>
            </form>

            <div className="border border-1 p-4">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="link-primary text-decoration-none fw-bold"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
