import React from 'react'
import './header.css'


export default function Header() {
  return (
    <section className="header">
    <div className="container-fluid">
       <nav className="navbar navbar-expand-lg navbar-dark">
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portfolio" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="portfolio">
               <ul className="navbar-nav">
                 <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#about">About</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#education">Education</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#experience">Experience</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#skills">Skills</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#project">Projects</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#certificate">Certificates</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#contact">Contact</a>
                 </li>
                </ul>
             </div>
       
         </nav>
   
    </div>
</section>
  )
}
