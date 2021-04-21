import React from 'react';
import { Link } from 'react-router-dom'

let Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Procart</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Mobile">Mobile</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Laptop">Laptop</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Watch">Watches</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Upload">Upload</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/cart"> 
              <i className="fa fa-shopping-cart">
              <span className="badge badge-success">2</span>
                </i>
                </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Registration">Registration</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Profile">Profile</Link>
            </li>
          </ul>

        </div>
      </nav>
    </div>

  )
}

export default Navbar