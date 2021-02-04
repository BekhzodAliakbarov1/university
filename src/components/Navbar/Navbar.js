import React, {useReducer, useEffect} from 'react';
import {Link} from 'react-router-dom'
import style from './Navbar.module.css'
import {RiMenu5Fill, RiCloseLine} from 'react-icons/ri'

import img1 from '../../assets/img/navbar1.jpg'
import img2 from '../../assets/img/navbar2.jpg'
import img3 from '../../assets/img/navbar3.jpg'
import img4 from '../../assets/img/navbar4.jpg'
import img5 from '../../assets/img/navbar5.jpg'



const initialState = {
    MenuClick: false,
    Scroll: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'CLICKED':
            return {
                ...state,
                MenuClick: !state.MenuClick
            }
        case 'SCROLL_TRUE':
            return{
                ...state,
                Scroll: true
            }
        case 'SCROLL_FALSE':
            return{
                ...state,
                Scroll: false
            }
        default:
            break;
    }
}
function Navbar() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    const handleScroll = () => {
        
        if(window.scrollY >= 300){
            dispatch({type:'SCROLL_TRUE'})
        }else{
            dispatch({type:'SCROLL_FALSE'})
        }
    }
    const onClick = () => dispatch({type:'CLICKED'})
    return (
        <div className={state.MenuClick ?  style.navbar1 : style.navbar}>
            <div  
            className={state.MenuClick 
                ? `${style.clickedNavbar} ${style.NC}`  
                : state.Scroll ? `${style.clickedNavbar} ${style.NS}` : style.clickedNavbar}
            >
                <h1>Westborn grammar school</h1>
                <div
                    onClick={() => dispatch({type: 'CLICKED'})}
                >
                    {state.MenuClick ? <span>Close <RiCloseLine /></span> : <span>Menu <RiMenu5Fill /></span>}
                    
                </div>
            </div>
            {
                state.MenuClick &&
                    <div className={style.activeNav}>
                        <div style={{backgroundImage:`url(${img1})`}}>
                            <h1>Branch</h1>
                            <div>
                                <h2>
                                    <Link to='/branch' onClick={onClick}>
                                        Branch
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/branch' onClick={onClick}>
                                        Branch2
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/branch' onClick={onClick}>
                                        Branch3
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/branch' onClick={onClick}>
                                        Branch4
                                    </Link>
                                </h2>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${img2})`}}>
                            <h1>Structure</h1>
                            <div>
                                <h2>
                                    <Link to='/governance' onClick={onClick}>
                                        Governence
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/department'onClick={onClick}>
                                        Department
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/sections'onClick={onClick}>
                                        Sections
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/careers'onClick={onClick}>
                                        Careers
                                    </Link>
                                </h2>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${img3})`}}>
                            <h1>Education</h1>
                            <div>
                                <h2>
                                    <Link to='/resources'onClick={onClick}>
                                        Resources
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/resources'onClick={onClick}>
                                        Resources1
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/resources'onClick={onClick}>
                                        Resources2
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/resources'onClick={onClick}>
                                        Resources3
                                    </Link>
                                </h2>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${img4})`}}>
                            <h1>Admissions 2020/2021</h1>
                            <div>
                                <h2>
                                    <Link to='/admission2021'onClick={onClick}>
                                        Admissions2021
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/admission2021'onClick={onClick}>
                                        Admissions2022
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/admission2021'onClick={onClick}>
                                        Admissions2023
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/admission2021'onClick={onClick}>
                                        Admissions2024
                                    </Link>
                                </h2>
                            </div>
                        </div>





                        
                        <div style={{backgroundImage:`url(${img5})`}}>
                            <h1>Admission</h1>
                            <div>
                                <h2>
                                    <Link to='/admission/check'onClick={onClick}>
                                        Admissions
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/admission/sections'onClick={onClick}>
                                        Admissions1
                                    </Link>
                                </h2>
                                <h2>
                                    <Link to='/admission/table'onClick={onClick}>
                                        Admissions2
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Navbar
