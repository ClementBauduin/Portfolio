import React from 'react'
import Style from './About.module.css'

const About = React.forwardRef((_pros, ref) =>  {
  return (
    <div ref={ref} className={Style.aboutContainer}>
      <div className={Style.letter}>         
        <h1>Qui suis-je</h1>    
        <p className={Style.sentence}>Je me considère surtout comme une personne curieuse qui aime explorer des domaines techniques.</p>
        <p className={Style.sentence}>Dans mes relations humaines, je me caractérise par un esprit pratique, une certaine réserve, un sérieux,de la sincérité et de la persévérance.</p>
        <p className={Style.sentence}>Je suis quelqu'un d'autonome et rigoureux , une qualité que j'ai développé de par mon parcours.</p>
        <p className={Style.sentence}>Il m'est compliqué de résumer et de démontrer l'étendue de mes compétences et connaissances en informatique développées au cours des quinze dernières années.</p>
        <p className={Style.sentence}>Cependant, je serais ravi d'en discuter avec vous.*</p>
      </div>
      <div className={Style.contact}>
        <h1>Contact</h1>
        <div className={Style.infoWrapper}>
          <p>Email : <a href="mailto:contact@clementbauduin.com:">contact@clementbauduin.com</a></p>
          <p>Phone : <a href="tel:+337 62 62 37 69">+33 7 62 62 37 69</a></p>
          <p>GitHub : <a href="https://github.com/ClementBauduin" target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline"}}>https://github.com/ClementBauduin</a></p>
          <p>Projet BTS : <a href="https://clementbauduin.wixsite.com/accueil" style={{textDecoration:"underline"}}>Projets de BTS et Projets de stage</a></p>
          <img src="https://tryhackme-badges.s3.amazonaws.com/Keym.png" alt="TryHackMe"/>
          <p className={Style.Ps}>NB : *Ce portfolio est avant tout un moyen pour moi de mettre en avant mes capacités en développement et d'avoir une vitrine avec des projets pouvant être consulté.
        Le domaine du système,réseaux et sécurité est beaucoup moins visuels.Je vous invite tout de même à consulter mes projets de BTS qui ont été documentés par mes soins afin de me présenter au concours de fin d'année.Ils datent de 2021 mais je suis persuadé qu'ils peuvent représenter un intérêt.À retrouver dans la rubrique contact ci-dessus</p>
        </div>
      </div>
      
    </div>
  )
})

export default About