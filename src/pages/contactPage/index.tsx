import React from 'react'
import PagesHeader from '../../components/pagesHeader'
import { contactConfig } from '../../config/contactConfig'
import ContactForm from '../../components/contactForm'
import SocialMedia from '../../components/socialMedia'

const ContactPage = () => {
  return (
    <>
    
      <div className='service-container p-10'>
                <div className='text-center'>
                    <PagesHeader pageTitle={contactConfig.title} pageSubTitle={contactConfig.subtitle} />
                </div>
                <div className='text-center'>
                     <ContactForm inputFields={contactConfig?.formGrp.inputFields} submitBtn={contactConfig?.formGrp.submitBtn}/>
                </div>
            </div>
    </>
  )
}

export default ContactPage
