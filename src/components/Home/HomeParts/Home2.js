import React from 'react'
import Style from './Home2.module.css'
import img from '../../../assets/img/pr.jpg'



const  Home2 = () => {

    return (
        <div className={Style.main}>
            <div className={Style.parent} >
               
                <div className={Style.divText} >
                        <div className={Style.learn} >
                            Learning
                        </div>
                        <div className={Style.text}>
                        Igniting a hunger for learning, unlocking creativity 
                        and exploring the concepts of global thinking form 
                        the basis of our daily purpose. Learning at Westbourne 
                        is sequenced and from our early learners through to Year
                         12, Westbourne students are encouraged to pursue excellence 
                         in everything they do.
                        </div>
                        <div className={Style.linkDiv} >
                            <div className={Style.linkdiv1} >
                            <div><a href="/"  >learn</a></div>
                            <div><a href="/" >learn</a></div>
                            </div>
                           <div>
                           <div><a href="/" >learn</a></div>
                            <div><a href="/" >learn</a></div>
                           </div>
                        </div>
                </div>
                <div  style={{backgroundImage:`url(${img})`}} className={Style.divImg} >

                </div>
            </div>
            
        </div>
    )
}

export default Home2