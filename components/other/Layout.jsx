import React from 'react'
import Header from '../header/Header'
import Footer from './Footer'
import { ReactElementLike } from 'prop-types'

const Layout = ({ children }) => (
  <>
    <Header />
      {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: ReactElementLike
}

export default Layout
