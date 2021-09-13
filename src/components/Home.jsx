import React from "react";
import About from "./About";

import { useStyles } from "../styles/home";

import Container from "@material-ui/core/Container";

function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Container alignItems="center"  className={classes.homeBody}>
        <About />
      </Container>
    </Container>
  );
}

export default Home;
