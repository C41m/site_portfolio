import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
    </section>
    <section id="Servicos">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Port1</section>
    <section>Port2</section>
    <section>Port3</section>
    <section id="Contato">Contato</section>
    {/* <Test/> */}
  </div>;
};

export default App;
