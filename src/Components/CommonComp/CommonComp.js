import React from 'react'
import ScrollComp from './../../Components/ScrollComp/ScrollComp.js';
import BlueBack from './../../Assets/backward-blue.png'
import BlueFor from './../../Assets/forward-blue.png'
const CommonComp = () => {
  return (
    <div>
                       <div className='discoverChicago'><span>Discover Chicago</span>
                <div>
                <img src={BlueBack} className='blueBackIcon' height={28} width={28} />
                <img src={BlueFor} className='blueForIcon' height={28} width={28} />

                </div>
                </div>
            <ScrollComp/>

            {/* see iconic chicago */}
            <div className='discoverChicago'><span>See Iconic Chicago</span>
                <div>
                <img src={BlueBack} className='blueBackIcon' height={28} width={28} />
                <img src={BlueFor} className='blueForIcon' height={28} width={28} />

                </div>
                </div>
            <ScrollComp/>

            {/* eat chicago style */}
            <div className='discoverChicago'><span>Eat Chicago Style</span>
                <div>
                <img src={BlueBack} className='blueBackIcon' height={28} width={28} />
                <img src={BlueFor} className='blueForIcon' height={28} width={28} />

                </div>
                </div>
            <ScrollComp/>


            {/* Experience shows and events */}
            <div className='discoverChicago'><span>Experience Shows and Events</span>
                <div>
                <img src={BlueBack} className='blueBackIcon' height={28} width={28} />
                <img src={BlueFor} className='blueForIcon' height={28} width={28} />

                </div>
                </div>
            <ScrollComp/>

            {/*  Sheep Chicago Style */}
            <div className='discoverChicago'><span>Sheep Chicago Style</span>
                <div>
                <img src={BlueBack} className='blueBackIcon' height={28} width={28} />
                <img src={BlueFor} className='blueForIcon' height={28} width={28} />

                </div>
                </div>
            <ScrollComp/>
    </div>
  )
}

export default CommonComp