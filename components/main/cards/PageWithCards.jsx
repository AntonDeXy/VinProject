import React from 'react'
import people from '../../../static/data/people.js'
import Card from './Card'

const PageWithCards = () => (
  <div className="cards">
    {people.map(person => (
      <Card
        key={person.id}
        thumbnail={person.thumbnail}
        url={person.url}
        name={person.name}
      />
    ))}
  </div>
)

export default PageWithCards
