import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div>
       <footer className="row footer">
            <div className="col-12">
                &copy; 2023 KrushalKalal, All rights Reserved.
                <span><a href="https://github.com/KrushalKalal" target="_blank"><i
                            className="fa-brands fa-github"></i></a></span>
                <span><a href="https://www.linkedin.com/in/krushal-kalal-13a1a5114/" target="_blank"><i
                            className="fa-brands fa-linkedin"></i></a></span>
                <span><a href="https://stackoverflow.com/users/18881193/krushal-kalal" target="_blank"><i
                            className="fa-brands fa-stack-overflow"></i></a></span>
                <span><a href="https://www.facebook.com/Krushal.Kalal.81" target="_blank"><i
                            className="fa-brands fa-facebook"></i></a></span>
                <span><a href="https://www.instagram.com/krushalkalal/" target="_blank"><i
                            className="fa-brands fa-instagram-square"></i></a></span>
            </div>
           </footer>
    </div>
  )
}
