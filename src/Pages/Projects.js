import React from "react";
import Nav from "../Components/Nav";
import styled from "styled-components";
import Footer from "../Components/Footer";
import "../App.css";
import "../projStyle.css";
import Poke from "../Components/pokadex.png";
import Animated from "../Components/animatedNavProj.png";
import Amore from "../Components/pastaAmore.PNG";
import Recipe from "../Components/recipe.PNG";

const Wrapper = styled.div`
  background-color: black;
`;

const Container = styled.div`
  width: 100%;
  background-color: black;
`;

const Project = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 4%;
  margin-bottom: 4%;
`;

const Image = styled.img`
  width: 90%;
  margin: 0% auto;
`;

const Modal = styled.div`
  animation: appear 350ms ease-in 1;
  max-width: 100%;
`;

export default function Projects() {
  return (
    <Wrapper>
      <Nav />
      <Container>
        <Project>
          <div>
            <Image src={Poke} />

            <Modal>
              <p className="content">
                Created a web page with React, CSS, HTML, JS that presents a
                styled list of characters obtained from Pokemon API.
              </p>
            </Modal>
          </div>

          <div>
            <Image src={Animated} />

            <Modal>
              <p className="content">
                Created this with HTML, CSS, and JavaScript. Was given the
                deadline of 1 week, and completed in 1 day.
              </p>
            </Modal>
          </div>

          <div>
            <Image src={Amore} />

            <Modal>
              <p className="content">
                Created a web page with HTML, CSS, XML, and brand-guide that
                presents a fully responsive multipage website.
              </p>
            </Modal>
          </div>

          <div>
            <Image src={Recipe} />

            <Modal>
              <p className="content">
                Created with Figma, React, Redux, Databases, CSS, Styled
                components, Remote Teamwork, and an awesome team! My classmate
                and I came up with the idea to create a Recipe website and an
                app that can and will utilize API and user-created recipes to
                have at the tip of your fingers. We brought on 2 other
                classmates to help with API and backend and together was able to
                get the website almost completed, and will be completing the app
                as soon as the entire website is functional.
              </p>
            </Modal>
          </div>
        </Project>
        <Footer />
      </Container>
    </Wrapper>
  );
}
