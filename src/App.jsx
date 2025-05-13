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
import SeoServicesPage from './components/Service/SEO/SEO';
import PPCAdvertising from './components/Service/Advertising/PPC';
import FacebookAds from './components/Service/Advertising/FbAd';
import InstaAds from './components/Service/Advertising/InstaAd';
import DisplayAdvertising from './components/Service/Advertising/DisplayAd';
import GoogleAdsPage from './components/Service/Advertising/GoogleAds';
import Portfolio from './components/Portfolio/Portfolio';
import SMM from './components/Service/SMM';
import Fb from './components/Service/SMM/Fb';
import Insta from './components/Service/SMM/Insta';
import Twitter from './components/Service/SMM/Twitter';
import LinkedIn from './components/Service/SMM/LinkedIn';



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
        <Route path="/seo" element={<SeoServicesPage />} />
        <Route path="/smm" element={<SMM />} />
        <Route path='/fb' element={<Fb />} />
        <Route path='/insta' element={<Insta />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/linkedin' element={<LinkedIn />} />
        <Route path="/ppc" element={<PPCAdvertising/>} />
        <Route path="/facebook-ads" element={<FacebookAds/>} />
        <Route path="/Insta-ads" element={<InstaAds/>} />
        <Route path="/google-ads" element={<GoogleAdsPage/>} />
        <Route path="/display" element={<DisplayAdvertising/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
