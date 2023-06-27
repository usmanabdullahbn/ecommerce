import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LogoutAlert from "./alert box/alert";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [ logout, setLogout] = useState(false);

  const handleClick = () => setClick(!click);

  const [name, setName] = useState("");

  const loggedOut = () => {
    setLogout(true)
    localStorage.removeItem("AuthenticatedUser");

    setInterval(() => {
      window.location = "/";
      // window.location.reload()
    },2000)
    
  };
  
  useEffect(() => {
    let fetchUser = localStorage.getItem("AuthenticatedUser");
    fetchUser = JSON.parse(fetchUser);
    //   console.log(fetchUser)
    fetchUser && setName(fetchUser.name);
  }, []);
  return (
    <>
    {/* <LogoutAlert /> */}
    {(logout == true) ? <LogoutAlert /> : null}
      <nav className="navbar">
        <div className="nav-container">
          <h3 className="name">Hello {name}</h3>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                All Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/my-products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/add-product"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Product
              </NavLink>
            </li>

            <button onClick={loggedOut} className="btn">
              Log Out
            </button>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default NavBar;
