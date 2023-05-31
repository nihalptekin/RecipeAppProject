import React from "react";
import NavbarStyles, {
  Hamburger,
  Logo,
  Menu,
  MenuLink,
  Nav,
} from "./NavbarStyles";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Nav> 
    
       <Logo href="#home" onClick={() => navigate("/home")}>
          {"<Clarusway>"} 
          <span>recipe</span>
        </Logo>

      <Menu>
       
        <MenuLink
          onClick={() => navigate("/about")}
          style={({ isActive }) => ({
            backgroundColor: isActive && "brown",
            borderRadius: isActive && "10px",
            color: isActive && "white",
          })}
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

        <MenuLink onClick={() => navigate('/')}>Logout</MenuLink>

        <Hamburger> <FaBars/> </Hamburger>
      </Menu>
    </Nav>
  );
};

export default Navbar;
