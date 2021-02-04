import React, { Fragment } from 'react'
import Style from './Branch2.module.css'
import img from '../../../assets/img/navbar2.jpg'
import img1 from '../../../assets/img/navbar3.jpg'
import img2 from '../../../assets/img/navbar4.jpg'

function Component2() {
    const numbers = [img,img2,img1]
    return (
            <div className={Style.main}>
                    <div className={Style.div} >
                        {
                            numbers.map((number, index) => {
                                return(
                                    <div className={Style.card}  key={index} style={{backgroundImage: `url(${number})`}}>
                                        <div className={Style.dark}>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum minima excepturi consectetur ad asperiores neque nihil minus vel? Vitae temporibus labore eius praesentium, nostrum autem voluptatibus modi eum architecto culpa necessitatibus! Sunt nihil dolores laudantium. Cupiditate quod, ipsam dicta dolor non aperiam unde voluptatum, ipsum delectus eum officiis consequuntur ad!</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
    )
}

export default Component2

