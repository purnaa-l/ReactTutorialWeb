import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className='cards__items'>
                    <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle."
                        label='Adventure'
                        path='/services'
                    
                    />
                    <CardItem 
                        src="images/img-2.jpg"
                        text="Explore the hidden islands deep inside the Andaman Nicobar Islands."
                        label='Luxury'
                        path='/services'
                    
                    />
                    <CardItem 
                        src="images/img-7.jpg"
                        text="Explore the treks offered by Shimla."
                        label='Treks'
                        path='/services'
                    
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
