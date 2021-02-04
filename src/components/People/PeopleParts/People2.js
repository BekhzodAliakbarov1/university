import React from 'react'
import style from './People2.module.css'
import img from '../../../assets/img/pr.jpg'



function People2() {
    return (
        <div className={style.main}>
            <div className={style.img} style={{backgroundImage: `url(${img})`}}></div>
            <div className={style.info}>
                <h1>Mega Hansen</h1>
                <h6></h6>
                <h3>Director</h3>
                <h4>Degrees: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, explicabo. Saepe odio natus placeat ipsum!</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint neque, pariatur quas similique odio natus error ipsum, fugit, dolores eligendi hic libero quibusdam consequuntur. Quisquam ipsam aliquid suscipit ratione recusandae itaque iusto voluptatem. Veritatis delectus earum </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere nam tenetur, saepe enim consequuntur consectetur voluptas sint quas at eaque rem doloribus optio repellendus blanditiis sunt assumenda deserunt voluptates libero natus provident? At impedit harum eum facere</p>
            </div>
        </div>
    )
}

export default People2
