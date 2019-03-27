/* eslint-disable react/prop-types */
import React from 'react'
import parseHTML from 'react-html-parser'

const About = props => (
  <main className='about'>
    <div className="wrapper">
      <div className="img">
        <img src={props.thumbnail} alt={props.name}/>
      </div>
      <div className="info">
        <h1 id='name'>{props.name}</h1>
        <h3>{props.years}</h3>
        <div>
          <span>{parseHTML(props.info)}</span>
        </div>
      </div>
    </div>
  </main>
)

export default About
