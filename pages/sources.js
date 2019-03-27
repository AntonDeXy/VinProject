import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import Head from '../components/meta/Head.jsx'
import Header from '../components/header/Header.jsx'
import Footer from '../components/other/Footer.jsx'
// import Layout from '../components/other/Layout'
// import Content from '../components/main/Content'

const pageWithCards = withRouter(() => (
  <div className="generalPage">
    <Head title='Джерела' />
    <Header />
    <main className="sources" id='sources'>
      <div className="wrapper">
        <h1>Джерела: </h1>
        <div className="links">
          <Link href='https://posibnyky.vntu.edu.ua/Stud%20graph%20realiz/19/1/5.html'>
            <a>posibnyky.vntu.edu.ua</a>
          </Link>
          <Link href='https://uk.wikipedia.org/wiki'>
            <a>uk.wikipedia.org/wiki/</a>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
))

export default pageWithCards
