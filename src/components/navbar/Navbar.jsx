import React from "react";
import {
  Hamburger,
  Logo,
  Menu,
  MenuLink,
  Nav,
} from "./NavbarStyles";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Nav> 
    
       <Logo onClick={()=> navigate("/home")}>
          <span>Recipe App</span>
        </Logo>

      <Menu>
       
        <MenuLink
        as={Link}
        to="/about"
        >
          About
        </MenuLink>

        <a
          href="https://github.com/nihalptekin"
          className="nav-link"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>

        <MenuLink  as={Link} to="/" onClick={() => navigate('/')}>Logout</MenuLink>

        <Hamburger> <FaBars/> </Hamburger>
      </Menu>
    </Nav>
  );
};

export default Navbar;
