import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import About from "./components/About"
import Home from "./components/Home"
import Project from "./components/Project"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skill from './components/Skill';
import Contact from './components/Contact';
import { GoChevronUp } from "react-icons/go";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <header className="App-header">
            <Link to="#home" smooth>
              <GoChevronUp style={{position: "fixed",float: "right",right: "10",bottom: "15"}}/>
            </Link>
            <Home />
          </header>
          <About />
          <Skill />
          <Project /> 
          <Contact />
        </div>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
