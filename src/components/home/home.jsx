import React from "react";
import Courses from "./courses";
import Domain from "./domain";
import Features from "./features";
import Hero from "./hero";
import Showcase from "./showcase";
import Testimonials from "./testimonials";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Domain />
        <Courses />
        <Features />
        <Showcase />
        <Testimonials />
      </React.Fragment>
    );
  }
}

export default Home;
