import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";

const App = () => (
  <div>
    <Switch>
      <Route path="/Projects">
        <Projects />
      </Route>

      <Route path="/Contact">
        <Contact />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/About">
        <About />
      </Route>

      <Route path="/Resume">
        <Resume />
      </Route>
    </Switch>
  </div>
);

export default App;
