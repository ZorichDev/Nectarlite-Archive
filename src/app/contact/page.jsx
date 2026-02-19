// src/app/contact/page.js
import React from 'react'
import ContactHero from '../components/ContactHero'
import GetInTouch from '../components/GetInTouch'
import ContactMap from '../components/ContactMap'

const Page = () => {  // Capitalized component name (convention)
  return (
    <>
        <ContactHero />
        <GetInTouch />
        <ContactMap />
    </>
  )
}

export default Page