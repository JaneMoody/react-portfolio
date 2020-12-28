import React from "react";
import styled from "styled-components/macro";
import logo from "../Components/J.png";
import HomeButton from "../Components/HomeButton";
import AboutButton from "../Components/AboutButton";
import ContactButton from "../Components/ContactButton";
import ResumeButton from "../Components/ResumeButton";
import ProjectsButton from "../Components/ProjectsButton";

const Wrapper = styled.div`
  margin-top: 0%;
  padding: 0%;
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  background-color: #1b1a1a;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  width: 100%;
  height: 4rem;
`;

const Image = styled.img`
  width: 4rem;
  margin-left: 30px;
  margin-top: 6px;
`;

const Div = styled.div`
  display: grid;
  width: 100%;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  width: 100%;
`;

const Li = styled.li`
  font-size: 1rem;
  list-style-type: none;
  width: 100%;
  margin-top: 45px;
`;

export default function Nav() {
  return (
    <Wrapper>
      <Container>
        <Image src={logo} />
        <Div>
          <div className="navUl">
            <Ul>
              <Li className="navLi">
                <HomeButton />
              </Li>

              <Li className="navLi">
                <AboutButton />
              </Li>
              <Li className="navLi">
                <ContactButton />
              </Li>
              <Li className="navLi">
                <ProjectsButton />
              </Li>
              <Li className="navLi">
                <ResumeButton />
              </Li>
            </Ul>
          </div>
        </Div>
      </Container>
    </Wrapper>
  );
}
