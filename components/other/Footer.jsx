import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <div className="wrapper">
      <div className="link">
        <Link href='/'>
          <h2>vinnitsia-people.vm.ua</h2>
        </Link>
      </div>
      <div className="sources">
        <Link href='/sources'>
          <h2>Джерела</h2>
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
