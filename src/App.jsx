import { MobileView } from 'react-device-detect';
import Header from './components/header'
import Hero from './components/hero'
import FeaturesHero from './components/featuresHero';
import './App.css'

function App() {

  return (
    <>
      <div id="section">
        <Header />
        <Hero />
      </div>

      <MobileView>
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      
      </MobileView>

      <FeaturesHero />

    </>
  )
}

export default App
