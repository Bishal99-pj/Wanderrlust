// import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS Global/Cards.css'

function CardItem({imgSrc,dest,label,path}) {
  return (
    <>
      <li className="card-item">
        <Link className="card-link" to={path}>
            <figure className="card-item-pic-wrap" data-category={label}>
                <img className='card-img' src={imgSrc} alt="Travel Destinations" />
            </figure>
            <div className="card-item-info">
                <h5 className="card-item-text">{dest}</h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
