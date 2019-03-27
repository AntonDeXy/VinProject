import React from 'react'

import Head from './meta/Head'
import Header from './header/Header'
import Footer from './other/Footer'
import Content from './main/Content'
import { string } from 'prop-types'

function Main (props) {
  if (props.topic === 'general') {
    return (
      <div className="generalPage">
        <Head />
        <Header />
        <Content topic='peoples'/>
        <Footer />
      </div>
    )
  }
}

Main.propTypes = {
  topic: string
}

export default Main
