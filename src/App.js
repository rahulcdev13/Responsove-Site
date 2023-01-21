 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';  
 import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact'; 
// import Footer from './Components/Footer'


function App() {
  return (
    <div className="App"> 
        <Header /> 
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} /> 
          </Routes> 
          {/* <Footer /> */}
    </div>
  );
}

export default App;
