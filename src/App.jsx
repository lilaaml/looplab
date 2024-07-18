import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import Careers from './components/Careers'
import Insights from './components/Insights'
import Footer from './components/Footer'

import './App.css'

function App () {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Industries />
      <Careers />
      <Insights />
      <Footer />
    </div>
  )
}

export default App