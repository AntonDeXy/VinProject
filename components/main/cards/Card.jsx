import React from 'react'
import { string } from 'prop-types'
import Link from 'next/link'

const Card = props => (
  <Link href={`/article/${props.url}`}>
    <div className="card pointer">
      <div className="img">
        <img
          src={props.thumbnail}
          alt={ props.name }
        />
      </div>
      <div className="name">
        <h2>{props.name}</h2>
      </div>
    </div>
  </Link>

)

Card.propTypes = {
  url: string,
  thumbnail: string,
  name: string
}

export default Card
