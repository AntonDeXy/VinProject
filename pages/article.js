import React from 'react'
import { withRouter } from 'next/router'
import Head from '../components/meta/Head.jsx'
import AboutPage from '../components/about/About.jsx'
import people from '../static/data/people'
import Layout from '../components/other/Layout'

const AboutJS = withRouter((props) => {
  const { id } = props.router.query
  const person = people.filter(item => item.url === String(id))[0]
  
  return (
    <div className="generalPage">
      <Head 
        title={`${person.name}`} 
      />
      <Layout>
        <AboutPage 
          key={person.url}
          name={person.name}
          years={person.years}
          thumbnail={person.thumbnail}
          info={person.info}
        />
      </Layout>
    </div>
  )
})

export default AboutJS