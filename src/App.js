import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import HeroSection from './components/HeroSection';
import PartnerSection from './components/PartnerSection';
import FeatureSection from './components/FeatureSection';


function App() {
  return (
    <div className="App">
      <HeroSection />

      <PartnerSection />

      <FeatureSection />
    </div>
  );
}

export default App;
