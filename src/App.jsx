import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
