import React from 'react'
import Style from './Footer.module.css'
import img from '../../assets/img/logo.jpg'
import {ImLocation2,ImEarth, ImFacebook} from 'react-icons/im'
import {AiFillPhone, AiFillInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {SiTwitter} from 'react-icons/si'
import {FaTelegramPlane} from 'react-icons/fa'



//icons from react-icons

const Footer = () => {

    return (
        <div>
            <div className={Style.main} >
                <div className={Style.inMain} >
                    <div className={Style.leftDiv} >
                        <div className={Style.logo} >
                            <div className={Style.imgLogo} >
                            <a href="/"> <img src={img} alt="" /> </a>
                            </div>
                            <div className={Style.nameLogo} >
                                Toshkent Davlat yuridik universtitetining ixtisoslashtirilgan filiali
                            </div>
                        </div>
                        <div className={Style.text} >
                            <p>
                                text
                            </p>
                        </div>
                        <div className={Style.downText}>
                            Copyright ©2019 Toshkent Davlat yuridik
                            universtitetining ixtisoslashtirilgan 
                            filiali. All Rights Reserved
                        </div>
                        <div className={Style.socialIcons}>
                                <div>
                                    <ImFacebook/>
                                </div>
                                <div>
                                    <SiTwitter/>
                                </div>
                                <div>
                                    <AiFillInstagram/>
                                </div>
                                <div>
                                    <FaTelegramPlane/>
                                </div>
                                
                        </div>
                        
                    </div>
                    <div className={Style.contact} >
                            <div className={Style.title} >
                                BIZ BILAN ALOQA
                            </div>
                            
                            <div className={Style.address} >
                                <ImLocation2/>
                                <span> Toshkent shahri, Rixsiliy ko'chasi, 9-uy</span>
                            </div>
                            <div className={Style.icon} >
                                <AiFillPhone/>
                                <span> +(998) 71 207 03 78</span>
                            </div>
                            <div className={Style.icon} >
                                <HiOutlineMail/>
                                 <span><a href="/">  info@sbtsul.uz </a></span>
                            </div>
                            <div className={Style.icon} >
                                <ImEarth/>
                                <span><a href="/"> www.sbtsul.uz </a></span>
                            </div>
                            <div>
                                <div className={Style.inTitle} >
                                    Ish vaqti
                                </div>
                                <div className={Style.times} >
                                    <h6>
                                        Dush-Juma:
                                    </h6>
                                    <h6>
                                        8:30-17:30
                                    </h6>                                    
                                </div>
                                <div className={Style.times} >
                                    <h6>
                                        Shanba, Yakshanba:
                                    </h6>
                                    <h6>
                                        Dam olish
                                    </h6>                                    
                                </div>
                            </div>
                    </div>
                    <div className={Style.quickInfo} >
                            <div className={Style.title} >
                                FOYDALI SAHIFALAR
                            </div>
                            <div className={Style.list} >
                                <div><a href="/">Asosiy sahifa</a></div>
                                <div><a href="/">Rahbariyat</a></div>
                                <div><a href="/">Qabul</a></div>
                                <div><a href="/">Hujjatlar</a></div>
                                <div><a href="/">Tuzilma</a></div>
                            </div>
                    </div>
                </div>

                
            </div>
            
        </div>
    )
}

export default Footer