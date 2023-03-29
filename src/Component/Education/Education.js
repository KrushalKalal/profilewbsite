import React from 'react'
import './education.css'

export default function Education() {
  return (
    <section className="timeline" id="education">
    <div className="title">
        <span>Education</span>
    </div>
    <div className="timeline_container left">
        <div className="content">
            <div><u>Year</u>: 2018-2020</div>
            <div><u>Postgraduate</u>: MSc(IT)</div>
            <div><u>University</u>: Dhirubhai Ambani Institute of Information and
                Communication Technology, Gandhinagar</div>
                <div><u>Percentage</u>: 68.50%</div>
          </div>
    </div>
    <div className="timeline_container right">
        <div className="content">
            <div><u>Year</u>: 2015-2018</div>
            <div><u>Undergraduate</u>: BSc.(CA & IT)</div>
            <div><u>University</u>: K.S. School of Business Management, Ahmedabad (Gujarat
                University) </div>
           <div><u>Percentage</u>: 70.80%</div>    
          </div>
    </div>
    <div className="timeline_container left">
        <div className="content">
            <div><u>Year</u>: 2015</div>
            <div><u>HSC</u>: (General Stream)
                </div>
            <div><u>School</u>: Kameshwar Vidyavihar</div>
            <div><u>Percentage</u>: 85.33%</div>
          </div>
    </div>
    <div className="timeline_container right">
        <div className="content">
            <div><u>Year</u>: 2013</div>
            <div><u>SSC</u></div>
            <div><u>School</u>: Shree Ganesh Vidhyamandir</div>
            <div><u>Percentage</u>: 82.77%</div>
          </div>
    </div>
 </section>
  )
}
