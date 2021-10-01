import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Domain from "./components/domain";
import Courses from "./components/courses";
import Features from "./components/features";
import Showcase from "./components/showcase";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import "./css/App.css";
import "./css/normalize.css";

class App extends React.Component {
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
export default App;
