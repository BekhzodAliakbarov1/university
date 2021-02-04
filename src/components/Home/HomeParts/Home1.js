import React from 'react'
import style from './Home1.module.css'

import img1 from '../../../assets/img/Slider-1.jpg'
import img2 from '../../../assets/img/Slider-2.jpg'
import img3 from '../../../assets/img/Slider-3.jpg'

const Home1 = (props) => {
    const {headers, paragraphs } = props
    return (
        <div>
            <div className="container-fluid" style={{padding: "0", marginBottom: "40px"}}>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>


                    <div className="carousel-inner">
                        <div className={`carousel-item active ${style.images} `} style={{ backgroundImage: `url(${img1})`}}>
                            <div className="carousel-caption">
                                <h3 style={{

                                }}>{headers.header1}</h3>
                                <p>{paragraphs.paragraph1}</p>
                            </div>

                        </div>

                        <div className={`carousel-item ${style.images}`} style={{ backgroundImage: `url(${img2})`}}>
                            <div className="carousel-caption">
                                <h3>{headers.header2}</h3>
                                <p>{paragraphs.paragraph2}</p>
                            </div>
                        </div>

                        <div className={`carousel-item ${style.images}`} style={{ backgroundImage: `url(${img3})`}}>
                            <div className="carousel-caption">
                                <h3>{headers.header3}</h3>
                                <p>{paragraphs.paragraph3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1