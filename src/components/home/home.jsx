import React from "react";
import Courses from "./courses";
import Domain from "./domain";
import Features from "./features";
import Hero from "./hero";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Footer from "./footer";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="block--dark block--skewed-left">
          <header>
            <Navbar />
          </header>
          <Hero />
        </main>
        <Domain />
        <Courses />
        <Features />
        <Testimonials />
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
