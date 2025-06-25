import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="px-10">
      <section>
        <Nav />
      </section>
      <section className="flex flex-col items-center">
        <AboutMe />
      </section>
      <section className="flex flex-col mt-[5rem]">
        <Project />
      </section>
      <section className="mt-[7rem]">
        <Skills />
      </section>
      <footer className="my-20">
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
