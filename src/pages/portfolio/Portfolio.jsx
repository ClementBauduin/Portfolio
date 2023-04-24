import React from 'react'
import Style from './Portfolio.module.css'

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
              <h3 className={Style.listTitle}>Built with :</h3>
              <ul className={Style.techList}>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Css Modules</li>
                <li>Nodemailer</li>
                <li>JSON Web Token</li>
                <li>Multer</li>
              </ul>
            </div>
            <div className={Style.buttonsWrapper}>
              <button className={Style.gitHub} onClick={() => openInNewTab("https://github.com/ClementBauduin/Front-Estate-Finder") }>Github</button>
              <button className={Style.live} onClick={() => openInNewTab("https://www.estate-finder.clementbauduin.com/") }>Live</button>
            </div>
            <div className={Style.mobileVideoWrapper}>
              <iframe src="https://www.youtube.com/embed/R7VkHAd5X1s?rel=0&autoplay=1&mute=1" frameBorder="0" allowFullScreen ></iframe>
            </div>
          </div>
          <div className={Style.videoContainer}>
            <iframe src="https://www.youtube.com/embed/R7VkHAd5X1s?rel=0&autoplay=1&mute=1" frameBorder="0" allowFullScreen ></iframe>
          </div>
        </div>
      </div>
      <div className={Style.portfolioContainer}>
        <div className={Style.portfolioWrapper}>
            <div className={Style.sideInfo} style={{order:'0'}}>
              <div className={Style.textInfo}>
                <h2 className={Style.mainTitle}>CAR DEALER</h2>
                <h3 className={Style.listTitle}>Built with :</h3>
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
              <div className={Style.mobileVideoWrapper}>
                <iframe src="https://www.youtube.com/embed/w39lm-ZoF2U?rel=0&autoplay=1&mute=1" frameBorder="0" allowFullScreen ></iframe>
              </div>
            </div>
            <div className={Style.videoContainer}>
              <iframe src="https://www.youtube.com/embed/w39lm-ZoF2U?rel=0&autoplay=1&mute=1" frameBorder="0" allowFullScreen ></iframe>
            </div>
          </div>
      </div>
      <div className={Style.portfolioContainer}>
        <div className={Style.portfolioWrapper}>
            <div className={Style.sideInfo} style={{order:'0'}}>
              <div className={Style.textInfo}>
                <h2 className={Style.mainTitle}>TFT HELPER</h2>
                <h3 className={Style.listTitle}>Built with :</h3>
                <ul className={Style.techList}>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Next.js</li>
                  <li>Jest</li>
                  <li>Css Modules</li>
                </ul>
              </div>
              <div className={Style.buttonsWrapper}>
                <button className={Style.gitHub} onClick={() => openInNewTab("https://github.com/ClementBauduin/Front-Car-Dealer")}>Github</button>
                <button className={Style.live} onClick={() => openInNewTab("https://car-dealer-bauduin-clement.netlify.app/")}>Live</button>
              </div>
              <div className={Style.mobileVideoWrapper}>
                <iframe src="https://www.youtube.com/embed/cmBRdyCZEF4?rel=0&autoplay=1&mute=1" frameBorder="0" allowFullScreen ></iframe>
              </div>
            </div>
            <div className={Style.videoContainer}>
              <iframe src="https://www.youtube.com/embed/cmBRdyCZEF4?rel=0&autoplay=1&mute=1" frameBorder="0" allowFullScreen ></iframe>
            </div>
          </div>
      </div>

    </>
  )
})

export default Portfolio;