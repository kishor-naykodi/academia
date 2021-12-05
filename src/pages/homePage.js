import Courses from "../components/courses";
import Domain from "../components/domain";
import Features from "../components/features";
import Hero from "../components/hero";
import Showcase from "../components/showcase";
import Testimonials from "../components/testimonials";

function Home(params) {
    return(
        <>

          <Hero />
          <Domain />
          <Courses />
          <Features />
          <Showcase />
          <Testimonials />
        </>
    )
    
}

export default Home;