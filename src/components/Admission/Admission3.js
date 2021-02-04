import React, {Fragment, useState} from 'react'
import Home1 from '../Home/HomeParts/Home1'
import Style from './Admission3.module.css'
import {props} from './Props'
import img from '../../assets/img/back.jpg'

const initialState = props
function Admission3() {
    const [names, setNames] = useState(initialState)
    
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
        <Fragment>
            <Home1 headers = {headers} paragraphs={paragraphs}/>
            <div className={Style.main} style={{backgroundImage:`url(${img})`}}>
                <h1>
                2019-yil 18-19 dekabr kunlari o'tkazilgan  tanlov natijalari 
                </h1>
                <h3 className={Style.header} >
                    Toshkent Davlat yuridik universtitetining ixtisoslashtirilgan filiali  
                    qayta tayyorlash kursiga 2019-yil 18-19 dekabr kunlari 
                    o'tkazilgan  tanlov natijalari     
                </h3>
                <table className={Style.table} style={{width: "100%" , textAlign: "center"}}>
                    <thead className={Style.border}>
                        <tr style={{background: "lightblue"}} className={Style.border}>
                            <th >T/r</th>
                            <th className={Style.border}>Tinglovchining F.I.Sh.</th>
                            <th className={Style.border}>Jami to'plangan ball</th>
                        </tr>
                    </thead>
                    <tbody className={Style.border}>
                    {
                        names.map((name, index) => {
                            if(index > 70){
                                return(
                                    <tr style={{background: "#FF736E"}} key={index}>
                                        <td className={Style.border}>{index+1}</td>
                                        <td className={Style.border}>{name.name}</td>
                                        <td className={Style.border}>{name.ball}</td>
                                    </tr>
                                )
                            }else{
                                return(
                                    <tr style={{background: "lightgreen"}} key={index}>
                                        <td className={Style.border}>{index+1}</td>
                                        <td className={Style.border}>{name.name}</td>
                                        <td className={Style.border}>{name.ball}</td>
                                    </tr>
                                )
                            }
                        } )
                    }
                    
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Admission3