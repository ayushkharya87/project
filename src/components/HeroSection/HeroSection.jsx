import React from 'react'
import "./HeroSection.css"
import Slider from '../slider/Slider';
import RotateBtn from '../rotate/RotateBtn';

const HeroSection = () => {
  return (
    <div>
        <div className='heading'>
            <h2 className='heading-1'>For Seamless Onboarding &</h2>
            <h1 className='heading-2'>Property Management Experience</h1>
        </div>

        <div className='para'>
            <p>Welcome to our hotel booking website! We are your go-to platform for finding the perfect <br />accommodations for your travels. Whether you're planning a business trip.</p>
        </div>

        <div className='content'>  
         {/*button  */}
           <div className="project-btn">
            <button> Button </button>
           </div>

           {/* slider */}
          <div className='slider'>
            <Slider />
          </div>

          {/* rotate button */}
          <div className='rotate'>
            <RotateBtn />
          </div>
          


        </div>
        
    </div>
  )
}

export default HeroSection