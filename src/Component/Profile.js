import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import './profile.css'
import Header from './Header/Header'
import About from './About/About'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Skill from './Skill/Skill'
import Project from './Project/Project'
import Certificate from './Certificate/Certificate'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

export default function Profile() {
  return (
    <div>
        <Header/>
        <About/>
        <Education/>
        <Experience/>
        <Skill/>
        <Project/>
        <Certificate/>
        <Contact/>
        <Footer/>
    </div>
  )
}
