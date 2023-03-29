import React from 'react'
import './profile.css'
import Header from './Header/Header'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Skill from './Skill/Skill'
import Certificate from './Certificate/Certificate'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

export default function Profile() {
  return (
    <div>
        <Header/>
        <Education/>
        <Experience/>
        <Skill/>
        <Certificate/>
        <Contact/>
        <Footer/>
    </div>
  )
}
