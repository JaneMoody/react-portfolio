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
export default function About() {
  return (
    <Wrapper>
      <Container>
        <Nav />
        <Footer />
      </Container>
    </Wrapper>
  );
}
