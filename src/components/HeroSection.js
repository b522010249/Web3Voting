import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>WELCOME</h1>
      <p>This website is a website for voting to choose student president.</p>
      <p>Please vote with transparency and fairness.</p>
      <div className='hero-btns'>
        <Button 
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'>GET VOTE</Button>

        <Button 
        className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'>WATCH PRESIDENT 
        </Button>

      </div>
    </div>
  )
}

export default HeroSection
