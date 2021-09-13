import React from "react";
import { useStyles } from "../styles/about";

import Grid from "@material-ui/core/Grid";

function About() {
  const classes = useStyles();
  return (
    <>
      <Grid container alignText="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <h1 className={classes.h1}>Software Engineer</h1>
          <p className={classes.location}>Remote US, UK, or Germany</p>
        </Grid>
      </Grid>

      <Grid container alignText="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <p>
            FireTeam is seeking a Front-end Software Engineer to help build our
            FireTeam Kubernetes Platform. As an Engineer at FireTeam, you should
            be passionate about building usable and polished products and
            interfaces. FireTeam is an enterprise software company, selling to
            the Fortune 500, but the Founders come from consumer startups
            (Airbnb, Twitter) and value great design. We believe internal tools
            should be as beautiful and easy to use as the world's best designed
            products.
          </p>
          <p>
            You will be part of the Front-End Engineering Team working closely
            with multiple disciplines to deliver great features for our DKP
            Products. Your main responsibility will be to work on end-to-end UI
            flows in our flagship Kommander product. We believe infrastructure
            management and developer tools should be as beautiful and easy to
            use as the world’s best-designed websites. With a world class design
            team, we can create an astonishing interface that solves real world
            use cases. Our engineers and designers take pride in their craft and
            ship products that are well designed and expertly engineered,
            leveraging technologies like React, Typescript and GraphQL.
          </p>
        </Grid>
      </Grid>

      <Grid container alignText="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <h4>
            <strong className={classes.visionH4}>Our Vision</strong>
          </h4>
          <p>
            <span className={classes.vision}>
              Enabling organizations to change the world through open source
              innovation.
            </span>
          </p>
          <h4>
            <strong className={classes.visionH4}>Our Mission</strong>
          </h4>
          <p>
            <span className={classes.vision}>
              We maximize our customer's business value by relentlessly
              delivering deep expertise and unrivaled technology that utilizes
              automation to solve the toughest of cloud native challenges
              including state, scale and resiliency.
            </span>
          </p>
        </Grid>
      </Grid>

      <Grid container alignText="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <h3>
            <strong className={classes.Resp}>Responsibilities</strong>
          </h3>
          <ul>
            <li>Create and publish technical content of multiple types for one or more software products</li>
            <li>Produce accurate content that complies with standards and is audience appropriate</li>
            <li>Work closely with software development teams on complex projects, able to ask questions effectively, and be comfortable with hands-on testing of command line software for documentation purposes.</li>
          </ul>
          <ul>
            <li>Actively participate in all aspects of Agile development, including ceremonies, planning, and end of sprint demos.</li>
            <li>Take on new products and assignments as business needs require.</li>
            <li>Communicate clearly and effectively with colleagues, customers, and project teams.</li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
