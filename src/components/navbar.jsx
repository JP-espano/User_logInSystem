import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-3">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">UMS.io</a>
        <div className="ms-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-light ms-lg-3 px-4" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;