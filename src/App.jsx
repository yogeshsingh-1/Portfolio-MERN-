import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <main className="">
      <Navbar />

      <Home />

      <About />

      <Project />

      <Skill />

      <Blog />

      <Contact />
    </main>
  );
};

export default App;
