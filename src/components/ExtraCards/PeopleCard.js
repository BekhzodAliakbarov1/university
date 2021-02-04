import React from 'react'
import style from './PeopleCard.module.css'


function PeopleCard({img, header, degree, paragraph}) {
    return (
        <div className={style.main}>
            <div className={style.img} style={{backgroundImage: `url(${img})`}}>
                <div className={style.paragraph}>
                    <p>{paragraph}</p>
                </div>
            </div>
            <h3>{header}</h3>
            <h4>{degree}</h4>
        </div>
    )
}

export default PeopleCard
