import styles from "../src/App.module.css";
import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Experience } from "./components/Experence/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Hero } from "./components/hero/hero";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
