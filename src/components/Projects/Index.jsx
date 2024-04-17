import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/constant";

// Styled button component
const ViewMoreButton = styled.button`
width: 20%;
text-decoration: none;
text-align: center;
background: hsla(271, 100%, 50%, 1);
background: linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
background: -moz-linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
background: -webkit-linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
padding: 10px 10px;
margin-top: 5px;
border-radius: 20px;
border: none;
color: ${({ theme }) => theme.text_primary};
font-size: 15px;
font-weight: 600;
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [projectsToShow, setProjectsToShow] = useState(3);

  useEffect(() => {
    // Reset projectsToShow to 3 whenever the toggle changes
    setProjectsToShow(3);
  }, [toggle]);

  const handleViewMore = () => {
    setProjectsToShow((prevCount) => prevCount + 3);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, on web apps. Here are some
          of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggleOptions.map((option) => (
            <React.Fragment key={option.value}>
              {toggle === option.value ? (
                <ToggleButton
                  active
                  value={option.value}
                  onClick={() => setToggle(option.value)}
                >
                  {option.label}
                </ToggleButton>
              ) : (
                <ToggleButton
                  value={option.value}
                  onClick={() => setToggle(option.value)}
                >
                  {option.label}
                </ToggleButton>
              )}
              <Divider />
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {(toggle === "all" ? projects : projects.filter(item => item.category === toggle))
            .slice(0, projectsToShow)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
        {toggle === "all" && projectsToShow < projects.length && (
          <ViewMoreButton onClick={handleViewMore}>View More</ViewMoreButton>
        )}
        {toggle !== "all" && projectsToShow < projects.filter(item => item.category === toggle).length && (
          <ViewMoreButton onClick={handleViewMore}>View More</ViewMoreButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;

const toggleOptions = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web app" },
  { label: "Android Apps", value: "android app" },
  { label: "Machine Learning", value: "machine learning" },
];
