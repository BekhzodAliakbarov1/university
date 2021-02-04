import React from 'react'
import style from './Home5.module.css'
import img from '../../../assets/img/Slider-3.jpg'

function Home5() {
    return (
        <div className={style.main}>
            <div className={style.dark}></div>
            
            <div className={style.text}>
                <h1>Hello world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi laboriosam repellat incidunt ad ipsum facere dolorum aperiam deserunt? Sed perferendis voluptatem corporis ipsa, ab ratione eveniet numquam molestiae dolore quibusdam veritatis laborum iusto delectus, consectetur, aliquam reiciendis praesentium autem quia. Voluptatum voluptates ad dolore? Vero cupiditate vel quisquam cumque blanditiis, hic tenetur ad asperiores voluptatem !</p>
                <h3></h3>
                <h6>Some kind of inform</h6>
            </div>
            <div className={style.img} style={{backgroundImage: `url(${img})`}}></div>
        </div>
    )
}

export default Home5
