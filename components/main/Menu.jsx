import React from 'react'
import Link from 'next/link'
import people from '../../static/data/people.js'
import arrrowSort from '../../static/img/icons/angle-right-solid.svg'

const Menu = () => (
  <div className="menu">
    <div className="header">
      <h2>Menu</h2>
    </div>
    <div className="content">
      {people.map(person => (
        <Link key={person.id} href={`/article/${person.url}`}>
          <h2>
            <img className='img_arrow' src={arrrowSort}/>
            {person.name}
          </h2>
        </Link>
      ))}
    </div>
  </div>
)

export default Menu
