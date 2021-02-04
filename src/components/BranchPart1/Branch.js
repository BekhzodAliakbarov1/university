import React from 'react'
import Home1 from '../Home/HomeParts/Home1'
import Branch1 from './BranchParts/Branch1'
import Branch2 from './BranchParts/Branch2'
import Branch3 from './BranchParts/Branch3'

function Branch() {
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
        <div>
            <Home1 headers = {headers} paragraphs={paragraphs}/>
            <Branch1 />
            <Branch2 />
            <Branch3 />
        </div>
    )
}

export default Branch
