import React from "react";

import { images } from "../../assets";

const Nav = () => {
  return (
    <nav className="navbar border-bottom">
      <div className="container w-75">
        <a className="navbar-brand" href="#">
          <img src={images.logo} alt="logo" className="w-75" />
        </a>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <ul className="d-flex list-unstyled">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-house fa-2x w-75 text-dark"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-square-plus fa-2x w-75 text-dark"></i>
            </a>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-compass fa-2x w-75 text-dark"></i>
            </a>
          </li> */}

          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa-solid fa-circle-user fa-2x w-75 text-dark"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        {/* <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a class="text-muted" href="#">
              Subscribe
            </a>
          </div>
          <div class="col-4 text-center">
            <a class="text-dark" href="#">
              Large
            </a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mx-3"
              >
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </a>
            <a class="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </a>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
