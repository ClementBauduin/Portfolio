import React from 'react'
import Style from './Portfolio.module.css'
import EstateFinderVideo from '../../assets/EstateFinder.mp4'
import CarDealerVideo from '../../assets/CarDealer.mp4'

const Portfolio = React.forwardRef((_props, ref) => {

  const openInNewTab = (url) =>  {
    window.open(url, '_blank').focus();
  }

  return (
    <>
      <div ref={ref} className={Style.portfolioContainer}>
        <div className={Style.portfolioWrapper}>
          <div className={Style.sideInfo}>
            <div className={Style.textInfo}>
              <h2 className={Style.mainTitle}>ESTATE FINDER</h2>
              <h3 className={Style.listTitle}>Made with :</h3>
              <ul className={Style.techList}>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Css Modules</li>
                <li>Multer</li>
                <li>JSON Web Token</li>
                <li>Nodemailer</li>
              </ul>
            </div>
            <div className={Style.buttonsWrapper}>
              <button className={Style.gitHub} onClick={() => openInNewTab("https://github.com/ClementBauduin/Front-Estate-Finder") }>Github</button>
              <button className={Style.live} onClick={() => openInNewTab("https://www.estate-finder.clementbauduin.com/") }>Live</button>
            </div>
          </div>
          <div className={Style.videoContainer}>
            <video autoPlay loop muted controls className={Style.videoWrapper}>
              <source src={EstateFinderVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className={Style.portfolioContainer}>
        <div className={Style.portfolioWrapper}>
            <div className={Style.sideInfo} style={{order:'0'}}>
              <div className={Style.textInfo}>
                <h2 className={Style.mainTitle}>CAR DEALER</h2>
                <h3 className={Style.listTitle}>Made with :</h3>
                <ul className={Style.techList}>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Css Modules</li>
                </ul>
              </div>
              <div className={Style.buttonsWrapper}>
                <button className={Style.gitHub} onClick={() => openInNewTab("https://github.com/ClementBauduin/Front-Car-Dealer")}>Github</button>
                <button className={Style.live} onClick={() => openInNewTab("https://car-dealer-bauduin-clement.netlify.app/")}>Live</button>
              </div>
            </div>
            <div className={Style.videoContainer}>
              <video autoPlay loop muted controls className={Style.videoWrapper}>
                <source src={CarDealerVideo} type="video/mp4" />
              </video>
            </div>
          </div>
      </div>

    </>
  )
})

export default Portfolio;