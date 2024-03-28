import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  ToggleButton,
} from "./NavbarStyleComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons
import { Bio } from "../../data/constant";
import { useTheme } from "styled-components";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleModeToggle = () => {
    setDarkMode(!darkMode); // Toggle darkMode state
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: `${darkMode ? "white" : "#103251"}`,
            marginBottom: "20",
            cursor: "pointer",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        <ButtonContainer>
          <ToggleButton onClick={handleModeToggle}>
            {darkMode ? <FaSun /> : <FaMoon />} {/* Toggle sun and moon icons */}
            {darkMode ? " Light Mode" : " Dark Mode"}
          </ToggleButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>
              About
            </MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>
              Skills
            </MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(!isOpen)}>
              Experience
            </MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>
              Projects
            </MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>
              Education
            </MobileLink>
              <ToggleButton style={{
                
                width: "max-content",
              }} onClick={handleModeToggle}>
                {darkMode ? <FaSun /> : <FaMoon />} {/* Toggle sun and moon icons */}
                {darkMode ? " Light Mode" : " Dark Mode"}
              </ToggleButton>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
