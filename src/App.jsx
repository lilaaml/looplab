import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import Careers from './components/Careers'
import Contact from './components/Contact'

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
      <Contact />
    </div>
  )
}

export default App