import React from 'react'
import Style from './About.module.css'

const About = React.forwardRef((_pros, ref) =>  {
  return (
    <div ref={ref} className={Style.aboutContainer}>
      <div className={Style.letter}>         
        <h1>About me</h1>    
        <p className={Style.sentence}>My name is Clement Bauduin and I am a self-taught and resourceful web developer with a degree in infrastructure solutions, systems, and networks.</p>
        <p className={Style.sentence}>Despite having a formal education in a slightly different field, I have always been passionate about technology and have taught myself web development over the past year through massive open online courses and online resources.</p>
        <p className={Style.sentence}>I am highly adaptable and know how to find the information I need to achieve my goals.</p>
        <p className={Style.sentence}>My projects, which are available on my GitHub, demonstrate the evolution of my skills month after month and determination to constantly improve and learn new technologies.</p>
        <p className={Style.sentence}>I am excited to bring my passion and skills to a project where I can grow and make a meaningful impact.</p>
      </div>
      <div className={Style.contact}>
        <h1>Contact</h1>
        <div className={Style.infoWrapper}>
          <p>Email : <a href="mailto:contact@clementbauduin.com:">contact@clementbauduin.com</a></p>
          <p>Phone : <a href="tel:+337 62 62 37 69">+33 7 62 62 37 69</a></p>
          <p>GitHub : <a href="https://github.com/ClementBauduin" target="_blank" rel="noopener noreferrer">https://github.com/ClementBauduin</a></p>
        </div>
      </div>
    </div>
  )
})

export default About