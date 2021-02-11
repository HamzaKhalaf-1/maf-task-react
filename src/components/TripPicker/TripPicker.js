import { useState } from 'react';

import './TripPicker.css';
import tripData from '../../data/tripsInfo';

import FacebookIcon from '../../assets/facebook.svg'
import TwitterIcon from '../../assets/twitter.svg'
import InstagramIcon from '../../assets/instagram.svg'

import Dots from '../../assets/dots.svg'
import ArrowLeft from '../../assets/arrow-left.png'


import Slide1 from '../../assets/joe-mania.webp'
import Slide2 from '../../assets/joe-mania2.jpg'
import Slide3 from '../../assets/joe-mania3.jpg'
import Slide4 from '../../assets/joe-mania4.jpg'

const imagesDict = {
  0: Slide1,
  1: Slide2,
  2: Slide3,
  3: Slide4,
}


function TripPicker() {
  const [selectedTripIndex, setSelectedTripIndex] = useState(0);

  const nextTrip = () => {
    if (selectedTripIndex < tripData.length - 1) {
      setSelectedTripIndex(selectedTripIndex + 1);
    } else {
      setSelectedTripIndex(0);
    }
  }

  const prevTrip = () => {
    if (selectedTripIndex > 0) {
      setSelectedTripIndex(selectedTripIndex - 1);
    } else {
      setSelectedTripIndex(tripData.length - 1);
    }
  }

  const tabWidth = `${100 / tripData.length}%`
  const offset = `translateX(${selectedTripIndex * 100}%)`

  return (
    <div className="trip-picker container relative">
      <div className="flex items-center text-white pb-10">
        <div className="text-7xl font-bold pr-5">Pick your trip</div>
        <div className="theme-color cursor-pointer transform rotate-45 text-2xl leading-3">+</div>
        <div className="text-base pl-5 text-left">Our team put together some trips to you to discover, <br/>feel free to discover each of them.</div>
      </div>

      <div className="tabs-container flex justify-between relative cursor-pointer">
        {tripData.map((trip, index) => {
          return (
            <span key={index} className={`tab text-white text-center w-full ${selectedTripIndex === index ? 'active' : ''}`} onClick={() => setSelectedTripIndex(index)}>
              {trip.tripName}
            </span>
          );
        })}
        <span className="selected-tab absolute" style={{ width: tabWidth, transform: offset }}></span>
      </div>

      <div className="flex info-container pt-24">
        <div className="trip-image relative" style={{backgroundImage: `url(${imagesDict[selectedTripIndex]})`}}>
          <img className="absolute -left-14 -bottom-14" src={Dots}/>
          <div className="flex flex-col img-info absolute left-0 bottom-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 text-2xl w-52 text-left">
            <div className="slide-number">
              0{selectedTripIndex + 1}.
            </div>
            {tripData[selectedTripIndex].imgTitle}
          </div>
          <div className="trip-controls absolute right-0 bottom-0 flex cursor-pointer">
            <img className="arrow w-10 pr-1 rounded-tl-md" src={ArrowLeft} onClick={() => prevTrip()}/>
            <img className="arrow w-10 transform rotate-180" src={ArrowLeft} onClick={() => nextTrip()}/>
          </div>
        </div>

        <div className="text-white text-center description-container pt-8 pl-4 ml-32">
          <p className="text-6xl font-bold">{tripData[selectedTripIndex].tripName}</p>
          <p className="shot-description text-base pt-5 w-96 text-left">{tripData[selectedTripIndex].shortDescription}</p>
          <p className="long-escription text-base pt-5 w-96 text-left">{tripData[selectedTripIndex].longDescription}</p>

          <div className="t-button t2-button text-white cursor-pointer">
            SEE OUR LATEST OFFER
          </div>
        </div>

        <div className="social-wrapper flex absolute right-0 bottom-0 w-24 flex-col items-start">
          <div className="text-white pb-2 text-base">
            SHARE IT:
          </div>
          <div className="social flex justify-between w-full">
            <img className="cursor-pointer" height="20" width="20" src={TwitterIcon}/>
            <img className="cursor-pointer" height="15" width="15" src={FacebookIcon}/>
            <img className="cursor-pointer" height="20" width="20" src={InstagramIcon}/>
          </div>
        </div>

        

      </div>
    </div>
  );
}

export default TripPicker;
