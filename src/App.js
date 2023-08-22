
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import SignUp from './components/Pages/SignUp';
import ContactUs from './components/Pages/ContactUs';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import Home from './components/Pages/Home';
import Consulting from './components/Pages/Consulting';
import Marketing from './components/Pages/Marketing';
import Design from './components/Pages/Design';
import Development from './components/Pages/Development';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
