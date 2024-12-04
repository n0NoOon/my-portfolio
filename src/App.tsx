import Nav from "./components/nav";
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
        <section className="flex flex-col my-[50px] items-center">
          <AboutMe />
        </section>
        <section className="mt-10">
          <Project />
        </section>
        <section className="mt-10">
          <Skills />
        </section>
        <footer className="mt-10">
          <Contacts />
        </footer>
      </div>
    </div>
  );
}

export default App;
