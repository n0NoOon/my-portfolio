import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="h-screen">
      <div className="container mx-auto px-20">
        <header>
          <Nav />
        </header>
        <section className="flex flex-col my-[60px] items-center">
          <AboutMe />
        </section>
        <section className="mt-[5rem]">
          <Project />
        </section>
        <section className="mt-[7rem]">
          <Skills />
        </section>
        <footer className="mt-20">
          <Contacts />
        </footer>
      </div>
    </div>
  );
}

export default App;
