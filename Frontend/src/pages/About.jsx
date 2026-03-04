import React from 'react';
import Parent from '../components/Parent'

const About = () => {
    const element = <div>Hello world</div>; 
    
    return (
        <div>
            <p>{element}</p>
            <Parent/>
        </div>
    )
}

export default About