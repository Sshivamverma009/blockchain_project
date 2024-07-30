import React from "react";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav">
      <div className="container-fluid">
        <a className="navbar-brand heading" href="/">
          Land register
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sellerdash">
                Seller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/buyerdash">
                Buyer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/landinspdash">
                LandInspector
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Register
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/seller">
                    seller
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/buyer">
                    Buyers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/LandInspector">
                    Land Inspector
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
