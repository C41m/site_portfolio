import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Services_1 from "./components/services/Services_1";

const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Servicos">
      <Parallax type="services"/>
    </section>
    <section>
      <Services_1/>
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <Portfolio />
    <section id="Contato">
      <Contact type="contact"/>
    </section>

    {/* <Test/> */}
  </div>;
};

export default App;
