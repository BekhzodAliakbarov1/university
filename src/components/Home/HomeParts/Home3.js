import React from 'react'
import Style from './Home3.module.css'

import img1 from '../../../assets/img/Slider-1.jpg'
import img2 from '../../../assets/img/Slider-2.jpg'
import img3 from '../../../assets/img/Slider-3.jpg'


const Home3 = () => {
    return (
        <div className={Style.main} >
            <div className={Style.parent} >
                <div className={Style.flex} >
                   <div className={Style.inflex} >
                        <div className={Style.imgDiv} style={{backgroundImage: `url(${img1})`}}>
                                <a href="/"> 
                                    <div  >

                                    </div>
                                </a>
                        </div>
                        <div className={Style.title} >
                                Principal's Message
                        </div>
                        <div className={Style.link} >
                            <a href="/">
                                Read more
                            </a>
                        </div>
                   </div>
                   <div className={Style.inflex} >
                        <div className={Style.imgDiv} style={{backgroundImage: `url(${img2})`}}>
                                <a href="/"> 
                                    <div  >

                                    </div>
                                </a>
                        </div>
                        <div className={Style.title} >
                                Principal's Message
                        </div>
                        <div className={Style.link} >
                            <a href="/">
                                Read more
                            </a>
                        </div>
                   </div>
                   <div className={Style.inflex} >
                        <div className={Style.imgDiv} style={{backgroundImage: `url(${img3})`}}>
                                <a href="/"> 
                                    <div >

                                    </div>
                                </a>
                        </div>
                        <div className={Style.title} >
                                Principal's Message
                        </div>
                        <div className={Style.link} >
                            <a href="/">
                                Read more
                            </a>
                        </div>
                   </div>

                </div>
            </div>
            
        </div>
    )
}

export default Home3