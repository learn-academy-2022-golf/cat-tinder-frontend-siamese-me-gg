import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import "../App.css"

const Footer = () => {
  return (
    <Nav className="footer-nav">
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
    </Nav>
  )
}

export default Footer