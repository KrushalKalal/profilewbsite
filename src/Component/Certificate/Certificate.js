import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './certificate.css'

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


export default function Certificate() {
    return (
        <section className="certificate_section" id="certificate">
            <div className="row">
                <div className="col-12 title">
                    <span>Certificate</span>
                </div>
            </div>
            <Carousel responsive={responsive}
            >
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.ibb.co/g7rTtxC/Html.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">HTML CSS BOOTSTRAP</h5>
                          
                            <a href="https://drive.google.com/file/d/1Ont0eRS1nlOgpkS2wyOCv5Gp9lCawiOk/view?usp=sharing" target="_blank" className="btn btn-primary">View Certificate</a>
                        </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.ibb.co/sKkXN65/Js.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Javascript</h5>
                            
                            <a href="https://drive.google.com/file/d/1Ot7meoioPr0NGwQbwaiCadHFq_gQsr6T/view?usp=sharing" target="_blank" className="btn btn-primary">View Certificate</a>
                        </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.ibb.co/pL046BB/Node.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Nodejs MongoDB Express</h5>
                          
                            <a href="https://drive.google.com/file/d/1OsvQlWtLeefWt8yJ7KObUEH2a-TLthdD/view?usp=sharing" target="_blank" className="btn btn-primary">View Certificate</a>
                        </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.ibb.co/KmN4rJt/React.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">React JS</h5>
                           
                            <a href="https://drive.google.com/file/d/1Otl5Vl0Kb9XnL5iPzM5McpR_XrDDa2Mk/view?usp=sharing" target="_blank" className="btn btn-primary">View Certificate</a>
                        </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.ibb.co/Y3tghTz/Fullstack.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Full Stack Web Developer</h5>
                           
                            <a href="https://drive.google.com/file/d/1Ojv3sYMMuzC-tBKaVz92KVgObvvrA5ho/view?usp=sharing" target="_blank" className="btn btn-primary">View Certificate</a>
                        </div>
                </div>
            </Carousel>
        </section>


    )
}
