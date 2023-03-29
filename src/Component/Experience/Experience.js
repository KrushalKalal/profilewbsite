import React from 'react'
import './experience.css'

export default function Experience() {
  return (
    <section className="timeline" id="experience">
    <div className="title">
        <span>Experience</span>
    </div>
    <div className="timeline_container left">
        <div className="content">
            <div><u>Year</u>: 2019</div>
            <div><u>Company:</u> DA-IICT</div>
            <div><u>Role</u>: Web Development Intern</div>
            <div><u>Guide</u>: Prof. Lavneet Singh</div>
            <div>(May,2019-July,2019)</div>
          </div>
    </div>
    <div className="timeline_container right">
        <div className="content">
            <div><u>Year</u>: 2020</div>
            <div><u>Year</u>: Creative Glance</div>
            <div><u>Role</u>: React JS Intern</div>
            <div><u>Guide</u>: Mr. Rutul Gajjar</div>
            <div>(Jan,2020-July,2020)</div>
          </div>
    </div>
    <div className="timeline_container left">
        <div className="content">
            <div><u>Year</u>: 2022</div>
            <div><u>Company</u>: Edureka</div>
            <div><u>Role</u>: Full Stack Developer Intern</div>
            <div><u>Guide</u>: Mr. Aakash Handa</div>
            <div>(April,2022-Nov,2022)</div>
          </div>
    </div>
 </section>       

  )
}
