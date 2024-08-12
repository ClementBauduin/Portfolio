import React,{useRef,useEffect} from 'react'
import Style from './Home.module.css'
import photo from '../../assets/photo.png'
import { PowerGlitch } from 'powerglitch'

function Home(props) {

  const {scrollToRef} = props
  const {portfolioRef} = props
  const {aboutRef} = props

  const imageRef = useRef(null)
  
  useEffect(() => {
    //Effet de glitch sur l'image
    PowerGlitch.glitch(imageRef.current,{
      "playMode": "always",
      "createContainers": true,
      "hideOverflow": false,
      "timing": {
        "duration": 1550
      },
      "glitchTimeSpan": {
        "start": 0.5,
        "end": 0.7
      },
      "shake": false,
      "slice": {
        "count": 12,
        "velocity": 15,
        "minHeight": 0.02,
        "maxHeight": 0.15,
        "hueRotate": true
      },
      "pulse": false
    })
  }, [])


  return (
    <>
      <div className={Style.main}>
        <div className={Style.imageWrapper}>
          <img className={Style.image} src={photo} alt="visage" ref={imageRef}/>
        </div>
        <div className={Style.sideInfo}>
          <div className={Style.textContainer}>
            <h1>Clément Bauduin</h1>
            <h1>Technicien polyvalent en IT. </h1>
            {/* <span className={Style.articleA}>A</span> */}
            {/* <h2 className={Style.webDev}>React Developer</h2> */}
            {/* <p>Based in 
              <span className={Style.blueLetter}> Fr</span>
              <span className={Style.whiteLetter}>an</span>
              <span className={Style.redLetter}>ce</span>
            .</p> */}
          </div>
          <div className={Style.buttonWrapper}>           
              <button onClick={() => scrollToRef(portfolioRef)} className={Style.portfolioButton}>PORTFOLIO</button>          
              <button onClick={() => scrollToRef(aboutRef)} className={Style.workTogether}>ABOUT ME</button>   
          </div>
        </div>
      </div>
    </>
    
    
  )
}

export default Home