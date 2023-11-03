import React from 'react'
import CardItem from './CardItem.jsx'
import '../CSS Global/Cards.css'

// external links work but local image won't load until served as public - webpack fault stkovrflow
// const imgSrc6 = 'https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 
function Cards() {
  return (
    <div className='cards'>
      <h1>Travel Destinations</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
            <ul className="card-items">
                <CardItem
                imgSrc='/assets/Images/Beach.jpg'
                dest='Maldives'
                label='Sea Adventure'
                path='./services'
                />
                <CardItem
                imgSrc='/assets/Images/Bridge-Mountain.jpg'
                dest='The Himalayas'
                label='Hiking'
                path='./services'
                />
              </ul>

              <ul className='card-items'>
                <CardItem
                imgSrc='/assets/Images/Lake.jpg'
                dest='Salt Lake'
                label='Lake Adventure'
                path='./services'
                />
                <CardItem
                imgSrc='/assets/Images/Mountain-Ranges.jpg'
                dest='Mountains of Africa'
                label='Climb your dreams'
                path='./services'
                />
                <CardItem
                imgSrc='/assets/Images/Boat.jpg'
                dest='Rivers of Amazon'
                label='Fishing'
                path='./services'
                />
                <CardItem
                imgSrc='/assets/Images/Dubai.jpg'
                dest='Dubai'
                label='Venice of the Gulf'
                path='./services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
