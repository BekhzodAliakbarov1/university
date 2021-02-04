import React from 'react'
import Style from './Branch1.module.css'

const  Component1 = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.textHead} >
                
                        <h1>We share news and updates about the life of 
                        the school in a number of ways, including a 
                        fortnightly digital newsletter for current 
                        families. The School also has a range of publications 
                        and reports that are available for the broader community. 
                        These include our twice yearly magazine Monomeith, Annual 
                        Reports for Government, VCE results summary and other 
                        papers and reports from time to time.</h1>
                    
                </div>
                <div className={Style.text} >
                    <h2>
                    Annual reports
                    </h2>
                    <p>
                    In order to fulfil its statutory obligations
                     under the Education and Training Reform Regulations 
                     (2007), the school is obliged to submit an Annual Community 
                     Report. As a registered school in the state of Victoria, this 
                     report must contain detailed information regarding such key
                      matters as: stewardship and governance, management and staffing, 
                      student attendance and outcomes, professional learning, finances 
                      and details of parent, staff and student satisfaction with the 
                      School. Once submitted, the Annual Community Report is published 
                      by the Victorian Registration and Qualifications Authority and is 
                      readily available on both their website and the School’s website.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Component1