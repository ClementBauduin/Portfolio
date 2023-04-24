import React from 'react'
import Style from './Contact.module.css'

const Contact = React.forwardRef((_props, ref) =>   {
  return (
    <div ref={ref} className={Style.contactContainer}>Contact</div>
  )
})

export default Contact