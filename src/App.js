import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner'
import { Experience } from './components/Experience'
import { Organization } from './components/Organization' 
import { Achievements } from './components/Achievements' 
import { Certificate } from './components/Certificate' 
import {Skills} from './components/skills/Skills'
import {Projects} from './components/projects/Projects'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Organization />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
