import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About/AboutUs';
import ContactPage from './components/Contact/Contact';
import NotFoundPage from './components/NotFound/NotFound';
import SmoothScrollToTop from './components/ScrollOnTop';
import OnPageSEO from './components/Service/SEO/OnPage';
import OffPageSEO from './components/Service/SEO/OffPage';
import TechnicalSEO from './components/Service/SEO/Technical';



const App = () => {
  return (
    <BrowserRouter>
    <SmoothScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutUs />} />
       <Route path="/contact" element={<ContactPage />} />
        <Route path="/onpage" element={<OnPageSEO />} />
        <Route path="/offpage" element={<OffPageSEO />} />
        <Route path="/technical" element={<TechnicalSEO />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
