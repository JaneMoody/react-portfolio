import React from "react";
import styled from "styled-components/macro";
import github from "../Components/github.png";
import behance from "../Components/behance.png";
import linkedin from "../Components/linkedin.png";
import "../App.css";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 3.5rem;
  background-color: #1b1a1a;
  padding: 0%;
  margin: 0%;
`;

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 5rem;
`;

const Socials = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  list-style-type: none;
  align-items: center;
  height: 3rem;
  width: 100%;
`;

const Image = styled.img`
  width: 3rem;
`;

const H1 = styled.h1`
  font-size: 1.3rem;
  color: #e669c0;
  text-align: center;
`;

export default function Nav() {
  return (
    <Wrapper>
      <Container>
        <Socials>
          <H1>&copy; Jane Moody 2020</H1>
          <a href="https://github.com/JaneMoody">
            <Image src={github} />
          </a>
          <a href="https://www.behance.net/janeEmoody">
            <Image src={behance} />
          </a>
          <a href="https://www.linkedin.com/in/jane-moody-792750b9/">
            <Image src={linkedin} style={{ width: "2rem" }} />
          </a>
        </Socials>
      </Container>
    </Wrapper>
  );
}
