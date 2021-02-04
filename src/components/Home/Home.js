import React, { useEffect, useState} from 'react'
import Home1 from './HomeParts/Home1'
import Home2 from './HomeParts/Home2'
import Home3 from './HomeParts/Home3'
import Home4 from './HomeParts/Home4'
import img from '../../assets/img/logo.jpg'
import style from './Home.module.css'
import Home5 from './HomeParts/Home5'


function Home() {
    const [condition, setCondition] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCondition(false)
        }, 3000);
        return() => {
            clearTimeout(timer)
        }
    }, [])
    const headers = {
        header1: 'Some kind of heading',
        header2: 'Next kind of heading',
        header3: 'Another kind of heading',
    }
    const paragraphs = {
        paragraph1: 'This is a paragraph',
        paragraph2: 'This is a next paragraph',
        paragraph3: 'This is a another paragraph'
    }
    return (
        <div className={style.main}>
            <div className={condition ? `${style.mainContainer1}` : `${style.mainContainer1} ${style.visible}`}>
                <Home1 headers = {headers} paragraphs={paragraphs}/>
                <Home2 />
                <Home3 />
                <Home4 />
                <Home5 />
            </div>
            <div className={condition ? `${style.imgContainer1}` : `${style.imgContainer1} ${style.visible}`}>
                <div className={style.img} style={{backgroundImage: `url(${img})`}}></div>
            </div>        
        </div>
    )
}

export default Home
