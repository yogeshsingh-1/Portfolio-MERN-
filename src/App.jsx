import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { RouterProvider } from "react-router-dom";
const App = () => {
  return (
    <main className="">
      <Navbar />
      <Home />
      <Project />
      <Skill />
      {/* <Blog /> */}
      <About />
      <Contact />
    </main>
  );
};

export default App;
