import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import catLogo from "../assets/cat-logo.png"
import '../App.css'

const Header = () => {
  return (
    <Nav className="header-nav">
      <NavItem>
        <NavLink to="/">
          <img
            src={catLogo}
            alt="Cat Tinder logo with outline of cat"
            className="cat-logo"
            width={50}
          />
        </NavLink>
      </NavItem>
      <div className="nav-links">
        <NavItem>
          <NavLink to="/catindex" className="nav-link">
            Meet the Cats
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew" className="nav-link">
            Add a New Cat
          </NavLink>
        </NavItem>
        <NavItem>
          <a
            target="blank"
            href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
            className="nav-link"
          >
            Adopt a Cat!
          </a>
        </NavItem>
      </div>
    </Nav>
  )
}

export default Header