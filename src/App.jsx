import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Slider from './components/Slider'
import { partnersLogo } from './data/partners'
import RoadMapSection from './components/RoadMapSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className=''>
  
        {/* Div violet (à gauche) */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="h-[10rem] w-[10rem] rounded-full blur-[10rem] sm:w-[40rem] translate-x-[-55%] translate-y-[-10%] bg-[#3e33dd]"></div>
        </div>
        {/* Div rose (à droite) */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="h-[10rem] w-[10rem] rounded-full blur-[10rem] sm:w-[40rem] translate-x-[55%] translate-y-[10%] bg-[#bb3ea6]"></div>
        </div>

        <NavBar />
        <div className='container mx-auto'>
          <HeroSection />
          <Slider images={partnersLogo}/>
          <RoadMapSection />
          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection /> 
          <Footer />
        </div>
      
      </div>
    </>
  )
}

export default App
