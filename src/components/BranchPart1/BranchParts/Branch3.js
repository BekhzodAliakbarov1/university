import React from 'react'
import Style from './Branch3.module.css'
import img from '../../../assets/img/navbar2.jpg'


function Branch3() {
    return (
            <div className={Style.main} >
                <div className={Style.height}>
                        <div className={Style.flex}>
                               <div className={Style.inFlex}>
                                        <div className={Style.imgCard} style={{backgroundImage: `url(${img})`}} >
                                                <div className={Style.bg} >
                                                    <h4>Some Kind of Information</h4>
                                                </div>
                                        </div>
                                    <h3>2020 VCE Results</h3>
                               </div>
                                <div className={Style.textCard}>
                                    <h3>
                                        VCE Results
                                    </h3>
                                    <div className={Style.elem} ></div>
                                    <p>
                                    Cohesive, inclusive and highly supportive 
                                    of each other and the school’s values, the 
                                    Class of 2019 have been active participants 
                                    in all that Westbourne offers. In particular, 
                                    these fine young people have shown themselves
                                    to be strongly committed to their community, 
                                    taking student voice to a new level of engagement 
                                    through their management of senior assemblies
                                    and enthusiastic involvement in the full range 
                                    of sporting, cultural, leadership and service 
                                    activities. The school is extremely proud of
                                    these achievements!
                                    </p>


                                </div>
                        </div>
                </div>
            </div>
    )
}

export default Branch3