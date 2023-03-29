import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <section className="contact_section" id="contact">
               <div className="row">
                   <div className="col-12 title">
                    <span>Contact Me</span>
                   </div>
               </div>
               <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 contact_form">
                    <form>
                        <input type="text" name="name" id="name" placeholder="Enter your name" autocomplete="off"/>
                        <input type="text" name="email" id="email" placeholder="Enter your email"
                            autocomplete="off"/>
                        <textarea name="msg" id="msg" placeholder="Enter your message here"
                            autocomplete="off"></textarea>
                        <button type="submit" className="contact_btn">Submit</button>
                    </form>
                   </div>
                   <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 map">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.25792258125!2d72.43965485403112!3d23.020181762092196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1651002898757!5m2!1sen!2sin"
                    width="100%" height="420" style={{border:0}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>
               </div>
           </section>
  )
}
