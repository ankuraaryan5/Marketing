import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SMM from './components/Service/SMM';
import SEO from './components/Service/SEO';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/smm' element={<SMM />} />
        <Route path='/seo' element={<SEO />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
