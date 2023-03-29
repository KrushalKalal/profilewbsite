import React from 'react'
import './skill.css'

export default function Skill() {
  return (
    <section className="skills_content" id="skills">
    <div className="title">
        <span>skills</span>
    </div>
    <div className="row">
       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 skills_card">
            <div className="row skills">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img src="https://i.ibb.co/3Y0yLXt/c.png" alt="c" className="skill_img"/>
                    <h1 className="skill_name">C</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img src="https://i.ibb.co/j4HSm4r/c.png" alt="c++" className="skill_img"/>
                    <h1 className="skill_name">C++</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img src="https://i.ibb.co/p1vYy5C/java.png" alt="java" className="skill_img java_img"/>
                    <h1 className="skill_name">JAVA</h1>
                </div>
               
             </div>  
            <div className="row skills">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img src="https://i.ibb.co/DzthQwn/html.png" alt="html" className="skill_img"/>
                    <h1 className="skill_name">HTML</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img src="https://i.ibb.co/KXyfxgc/css.png" alt="css" className="skill_img"/>
                    <h1 className="skill_name">CSS</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 skills_card">
                    <img src="https://i.ibb.co/WsnvdMp/bootstrap.png" alt="bootstrap" className="skill_img bootstrap_img"/>
                    <h1 className="skill_name">BOOTSTRAP</h1>
                </div>
              
               
            </div>
            <div className="row skills">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img src="https://i.ibb.co/nrsCwYR/js.png" alt="javascript" className="skill_img"/>
                    <h1 className="skill_name">JAVASCRIPT</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img src="https://i.ibb.co/GvKdHsb/react.png" alt="react js" className="skill_img react_img"/>
                    <h1 className="skill_name">REACT JS</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img src="https://i.ibb.co/9TW5GWD/nodejs.png" alt="node js" className="skill_img node_img"/>
                    <h1 className="skill_name">NODE JS</h1>
                </div>
            </div>
            <div className="row skills">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img src="https://i.ibb.co/cYszNMw/mongodb.png" alt="mongo db" className="skill_img"/>
                    <h1 className="skill_name">MONGO DB</h1>
                </div>
            </div>
        </div> 
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 progress_bar">
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "90%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">C</div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">C++</div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "85%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">JAVA</div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "95%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">HTML</div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "85%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">CSS</div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "85%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">BOOTSTRAP</div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">JAVASCRIPT</div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">REACT JS</div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">NODE JS</div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">MONGO DB</div>
            </div>
      
      </div>   
    </div>
   
</section>
  )
}
