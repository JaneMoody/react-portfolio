import React from "react";
import Nav from "../Components/Nav";
import styled from "styled-components/macro";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
  margin-top: 0%;
  padding: 0%;
  box-sizing: border-box;
  width: 100%;
  background-color: black;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  background-color: black;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  padding: 4%;
  margin-top: 1%;
`;

const P = styled.p`
  font-size: 1.5rem;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 50%;
  text-align: center;
  margin: 0% auto;
  padding: 2% 0% 4% 0%;
`;
export default function About() {
  return (
    <Wrapper>
      <Container>
        <Nav />
        <div>
          <H1>Hello and Welcome!</H1>
        </div>
        <div style={{ width: "100%" }}>
          <P>
            I am a Creative Designer, and I am currently learning Full Stack Web
            Development at Lambda School. Check out my projects page to see some
            of the projects I have completed. Some of my hobbies include
            camping, swimming, gaming, coding side projects, baking, making
            crafts, and listening to music.
          </P>
        </div>
        <Footer />
      </Container>
    </Wrapper>
  );
}
