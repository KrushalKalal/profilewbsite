import React from 'react'
import './about.css'

export default function About() {
  return (
    <section className="nav_about" id="about">
    <div className="container-fluid">
        <div className="row">
           <div className="phone_img col-4">
               <img src="https://i.ibb.co/r21GXRY/phone.png" alt="profile"/>
               <div className="myCard">
                <img src="https://i.ibb.co/jTzVgtP/krushal-Passport-1.jpg" alt="Krushal_image"/>
                <div className="profile_name">Krushal Kalal</div>
                <div className="profile_position">Full Stack Developer</div>
                <div className="profile_contact">Contact : 8141938093</div>
                <div className="profile_links">
                    <a href="https://github.com/KrushalKalal" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/krushal-kalal-13a1a5114/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://stackoverflow.com/users/18881193/krushal-kalal" target="_blank"><i className="fa-brands fa-stack-overflow"></i></a>
                    <a href="https://twitter.com/krushalkalal" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.facebook.com/Krushal.Kalal.81" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/krushalkalal/" target="_blank"><i className="fa-brands fa-instagram-square"></i></a>
                </div>
                <a href="files/Krushalkalal_Resume.pdf" download="resume"><button className="btn">Download CV <i className="fa fa-download"></i></button></a>
               </div>
             </div>

            <div className="about_img col-8">
              <img src="https://i.ibb.co/PjxL9jf/laptop.png" alt="about"/>
               <div className="about">
               <p>
               I am Krushal Kalal, highly competent IT professional with a 13 months experience in designing
               websites, and managing databases. I am eager to be challenged in order to grow and further improve
               my IT skills. My greatest passion is in life is using my technical know-how to benefit other people
               and organisations.Recently i completed internship  at Edureka as full stack web developer.
               currently working as a free lancer and developing web applications with React JS.
              </p> 
             
           </div> 
        </div>
           
        </div>
    </div>
</section>
  )
}
