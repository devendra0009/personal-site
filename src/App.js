import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
// import Footer from './components/footer/Footer';
import Header  from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
// import Extras from './components/extras/Extras';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      {/* <Extras/> */}
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
