import React from "react";
import Nav from "../Components/Nav";
import styled from "styled-components/macro";
import Footer from "../Components/Footer";
import Dev from "../Components/dev.jpg";
import Designer from "../Components/purpleDesigner.jpg";
import "../App.css";

const Wrapper = styled.div`
  margin-top: 0%;
  padding: 0%;
  box-sizing: border-box;
  width: 100%;
  background-color: black;
  height: 100vh;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  height: 72vh;
  width: 100%;
  margin: 2% 0% 0% 0%;
`;

const Image = styled.img`
  width: 30rem;
`;

const P1 = styled.p`
  font-size: 2.2rem;
  text-align: center;
  color: blue;
`;

const P2 = styled.p`
  font-size: 2.5rem;
  text-align: center;
  color: #b62c89;
`;

export default function Home() {
  return (
    <Wrapper>
      <div style={{ height: "90vh" }}>
        <Nav />
        <Div>
          <div>
            <Image src={Dev} />
            <P1 className="P1">Full Stack Developer</P1>
          </div>
          <div>
            <Image src={Designer} />
            <P2 className="P2">Creative Designer</P2>
          </div>
        </Div>
      </div>
      <Footer />
    </Wrapper>
  );
}
