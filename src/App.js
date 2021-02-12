import React, { Suspense, useState } from 'react';
import { scaleRotate as Menu } from 'react-burger-menu'

import './App.css';

import bgImage from './assets/cbimage.webp'
import TwitterIcon from './assets/twitter.svg'
import InstagramIcon from './assets/instagram.svg'
import FacebookIcon from './assets/facebook.svg'
import Logo from './assets/logo.png'
import Search from './assets/search 1.png'

const TripPicker = React.lazy(() => import('./components/TripPicker/TripPicker'));


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const setIsOpenBlocking = (bool, e) => {
    e.stopPropagation();
    setIsOpen(bool)
  }

  return (
    <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <p id="home" className="cursor-pointer menu-item font-bold text-3xl" >Home</p>
        <p id="about" className="cursor-pointer menu-item font-bold text-3xl" >About</p>
        <p id="contact" className="cursor-pointer menu-item font-bold text-3xl" >Contact</p>
      </Menu>

      <main id="page-wrap" className="wrapper overflow-x-hidden" onClick={(e) => setIsOpenBlocking(false, e)} >
        <div className="intro relative" style={{backgroundImage: `url(${bgImage})`}}>
          <div className="container flex justify-between menu-container">
            <img className="logo-icon" width="10" height="5" alt="logo" src={Logo}/>
            <span className="flex items-center">
              <img className="cursor-pointer search-icon pr-4" width="30" height="30" alt="search" src={Search} />

              <div className={`t-button text-white cursor-pointer menu ${isOpen ? 'selected': ''}`} onClick={(e) => setIsOpenBlocking(!isOpen, e)}>
                MENU
              </div>
              

            </span>
          </div>

          <div className="container w-full text-white text-center">
            <p className="text-9xl leading-relaxed font-bold">Night Trips</p>
            <p className="text-lg">WE GOT TRIPS FOR THE TRIPPSTER IN YOU</p>
            <p className="pt-8 text-base">
              Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat <br/>
              lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel risus, arcu a <br/>
              viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.<br/>
            </p>
          </div>

          <div className="absolute right-72 bottom-40 flex flex-col items-center h-20 justify-between hide-mobile">
            <img className="cursor-pointer" height="20" alt="Twitter Icon" width="20" src={TwitterIcon}/>
            <img className="cursor-pointer" height="20" alt="Instagram Icon" width="20" src={InstagramIcon}/>
            <img className="cursor-pointer" height="15" alt="Facebook Icon" width="15" src={FacebookIcon}/>
          </div>

          <div className="absolute left-56 bottom-40 flex transform -rotate-90 items-center text-white hide-mobile">
            <div className="theme-bgcolor w-16 h-0.5"></div>
            <div className="pl-2">SCROLL</div>
          </div>
        </div>
        
        <div className="trip-picker__container text-red text-center">
          <Suspense fallback={<div>Loading...</div>}>
            <TripPicker />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
