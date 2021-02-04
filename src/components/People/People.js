import React from 'react'
import Home1 from '../Home/HomeParts/Home1'
import People1 from './PeopleParts/People1'
import People2 from './PeopleParts/People2'
import People3 from './PeopleParts/People3'
import People4 from './PeopleParts/People4'


function People() {
    const headers = {
        header1: 'Some kind of text about people',
        header2: 'Next kind of text about people',
        header3: 'Another kind of text about people',
    }
    const paragraphs = {
        paragraph1: 'This is a text about people',
        paragraph2: 'This is a next text about people',
        paragraph3: 'This is a another text about people'
    }
    return (
        <div style={{width: '100%', height:'100%'}}>
            <Home1 headers={headers} paragraphs={paragraphs}/>
            <People1 />
            <People2 />
            <People3 />
            <People4 />
        </div>
    )
}

export default People
