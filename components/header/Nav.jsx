import React from 'react'
import Link from 'next/link'
import symbol from '../../static/img/symbol.png'

const Nav = () => (
  <header>
    <Link href='/'>
      <div className="wrapper">
        <img src={symbol} alt=""/>
        <h1>Відомі особистості Вінниччини</h1>
        <img src={symbol} id='header_img' alt=""/>
      </div>
    </Link>
  </header>
)

export default Nav
