import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Student President!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-president1.jpg'
                text='I will make the school have a better and warm society.'
                label='Mr.Drof'
                path='/about'
                />
                <CardItem 
                src='images/img-president2.jpg'
                text='I will make the school a school where people want to come and study.'
                label='Song Kang'
                path='/about'
                />

            </ul>
            <ul className='cards__items'>
            <CardItem
              src='/'
              text='...'
              label='...'
              path='/about'
            />
            <CardItem
              src='/'
              text='...'
              label='...'
              path='/about'
            />
          

            </ul>

        </div>

      </div>

    </div>
  )
}

export default Cards
