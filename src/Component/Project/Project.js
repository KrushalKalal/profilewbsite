import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './project.css'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Project() {
  return (
    <section className="project_section" id="project">
    <div className="row">
        <div className="col-12 title">
            <span>Projects</span>
        </div>
    </div>
    <Carousel responsive={responsive}
    >
        <div className="card" style={{width: "18rem"}}>
            <img src="https://i.ibb.co/555qmx4/xomato.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">HTML CSS BOOTSTRAP</h5>
                    <div>
                    <a href="https://github.com/KrushalKalal/xomato-render" target="_blank" className="btn btn-primary">Source Code</a>
                    <a href="https://zwigatoian.netlify.app/" target="_blank" className="btn btn-success">Demo Link</a>
                    </div>
                </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://i.ibb.co/HhzBGm8/shoppinghub.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Javascript</h5>
                    <div>
                    <a href="https://github.com/KrushalKalal/shoppingHub-render" target="_blank" className="btn btn-primary">Source Code</a>
                    <a href="https://shoppingshub.netlify.app/" target="_blank" className="btn btn-success">Demo Link</a>
                    </div>
                </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://i.ibb.co/DLnwy96/Netflix.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Nodejs MongoDB Express</h5>
                   <div>
                    <a href="https://github.com/KrushalKalal/Netflix_clone" target="_blank" className="btn btn-primary">Source Code</a>
                    <a href="https://krushalkalal.github.io/Netflix_clone/" target="_blank" className="btn btn-success">Demo Link</a>
                    </div>
                </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://i.ibb.co/KmN4rJt/React.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">React JS</h5>
                    <div>
                    <a href="#" target="_blank" className="btn btn-primary">Source Code</a>
                    <a href="#" target="_blank" className="btn btn-success">Demo Link</a>
                    </div>
                </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://i.ibb.co/Y3tghTz/Fullstack.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Full Stack Web Developer</h5>
                    <div>
                    <a href="#" target="_blank" className="btn btn-primary">Source Code</a>
                    <a href="#" target="_blank" className="btn btn-success">Demo Link</a>
                    </div>
                </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://i.ibb.co/Y3tghTz/Fullstack.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Full Stack Web Developer</h5>
                    <div>
                    <a href="#" target="_blank" className="btn btn-primary">Source Code</a>
                    <a href="#" target="_blank" className="btn btn-success">Demo Link</a>
                    </div>
                </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://i.ibb.co/Y3tghTz/Fullstack.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Full Stack Web Developer</h5>
                    <div>
                    <a href="#" target="_blank" className="btn btn-primary">Source Code</a>
                    <a href="#" target="_blank" className="btn btn-success">Demo Link</a>
                    </div>
                </div>
        </div>
    </Carousel>
</section>
  )
}
