import './styles/main.css';
import { About } from './components/About';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar/>
        <Banner />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
