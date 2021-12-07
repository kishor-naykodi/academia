import React from "react";
import Courses from "./courses";
import Domain from "./domain";
import Features from "./features";
import Hero from "./hero";
import Showcase from "./showcase";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Footer from "./footer";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>
        <Hero />
        <Domain />
        <Courses />
        <Features />
        <Showcase />
        <Testimonials />
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
