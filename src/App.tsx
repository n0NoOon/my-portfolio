import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="px-10 md:px-56">
      <section>
        <Nav />
      </section>
      <section id="about-me" className="flex flex-col items-center">
        <AboutMe />
      </section>
      <section id="projects" className="flex flex-col">
        <Project />
      </section>
      <section className="mt-[7rem]">
        <Skills />
      </section>
      <footer id="contact" className="my-20">
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
