import React,{useRef} from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'


function App() {

  const portfolioRef = useRef(null)
  const aboutRef = useRef(null)

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({behavior:"smooth"});
  }
 
  return (
    <>
        <main style={{height:"100vh",overflowY:"scroll",scrollSnapType:"y mandatory"}}>
          <Navbar portfolioRef={portfolioRef} aboutRef={aboutRef} scrollToRef={scrollToRef}/>
          <Home portfolioRef={portfolioRef} aboutRef={aboutRef} scrollToRef={scrollToRef}/>
          <Portfolio ref={portfolioRef}/>
          <About ref={aboutRef}/>  
        </main>
    </>
  )
}

export default App