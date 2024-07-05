import Navbar from "../components/navbar";
import Home from "../components/Home";
import Logo from "../components/Logo";
import Services from "../components/Services";
import Blog from "../components/Blog";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Pricing from '../components/Pricing';


export default function Index() {

  return (
    <div className=" ">
     <Navbar />
     <Home />
     <Logo />
     <Services />
     <Blog />
     <About />
     <Pricing />
     <Contact />
     <Footer />
    </div>
  );
}
