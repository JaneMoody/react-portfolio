import React from "react";
import Nav from "../Components/Nav";
import styled from "styled-components/macro";
import Footer from "../Components/Footer";
import "../App.css";
import "../ContactStyle.css";
import { FormGroup, Label, Input } from "reactstrap";

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

const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  height: 80vh;
`;
const Div1 = styled.div`
  border-right: 1px purple solid;
`;

const Div2 = styled.div`
  border-left: 1px purple solid;
`;

const H1 = styled.h1`
  color: white;
`;

const P = styled.p`
  color: white;
`;

const H2 = styled.h2`
  color: white;
`;

const Div3 = styled.div`
  color: white;
`;
export default function About() {
  return (
    <Wrapper>
      <Container>
        <Nav />
        <Section className="section">
          <Div1>
            <H1 className="h1">Jane Moody</H1>
            <P className="p1">moodyejane@gmail.com</P>
          </Div1>
          <Div2>
            <H2 className="h2">Contact Me</H2>
            <Div3 className="div3">
              <FormGroup style={{ display: "grid", gridAutoColumns: "auto" }}>
                <Label for="Email">Email: </Label>
                <Input />
                <Label for="Name">Name: </Label>
                <Input />
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
                <Input />
              </FormGroup>
            </Div3>
          </Div2>
        </Section>

        <Footer />
      </Container>
    </Wrapper>
  );
}
