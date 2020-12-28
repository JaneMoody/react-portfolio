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
  background-color: black;
  padding: 0%;
  margin: 0%;
  display: grid;
  grid-template-columns: auto auto;
`;

const Image = styled.img`
  width: 3rem;
`;

const H1 = styled.h1`
  font-size: 1.3rem;
  color: #e669c0;
  text-align: left;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: baseline;
`;
export default function Nav() {
  return (
    <Wrapper>
      <H1>&copy; Jane Moody 2020</H1>
      <Div>
        <a href="https://github.com/JaneMoody">
          <Image src={github} />
        </a>
        <a href="https://www.behance.net/janeEmoody">
          <Image src={behance} />
        </a>
        <a href="https://www.linkedin.com/in/jane-moody-792750b9/">
          <Image src={linkedin} />
        </a>
      </Div>
    </Wrapper>
  );
}
