import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import HeroSection from './components/HeroSection';
import PartnerSection from './components/PartnerSection';
import FeatureSection from './components/FeatureSection';
import IntroduceSection from './components/IntroduceSection';
import Tutors from './components/Tutors';
import PackageSection from './components/PackageSection';
import FaqsSection from './components/FaqsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />

      <PartnerSection />

      <FeatureSection />

      <IntroduceSection />

      <Tutors />

      <PackageSection />

      <FaqsSection />

      <Footer />
    </div>
  );
}

export default App;
