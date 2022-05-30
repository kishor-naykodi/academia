import React from "react";
import Features from "./features";
import Hero from "./hero";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";

//css imports
import "../../css/home.css";
import "react-toastify/dist/ReactToastify.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="block--dark block--skewed-left">
          <header>
            <ToastContainer />
            <Navbar user={this.props.user} />
          </header>
          <Hero />
        </main>
        <Testimonials />
        <Features />
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
