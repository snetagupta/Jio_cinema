import React from 'react'
import Navbar from './components/Navbar/index';
import Trending from './components/Trending/index';
import Carousel from './components/Carousel/index';
import MiniCard from './components/MiniCard/index';
import Hot from './components/Hot/index';
import HotCards from './components/HotCards/index';
import Ipl from './components/Ipl/index';
import VerticalCarousel from './components/VerticalCarousel';
import HorizontalCard from './components/HorizontalCard';
import BigAd from './components/BigAd';
import SmallAd from './components/SmallAd';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div className='fixed top-0 w-full z-50'>
      <Navbar/>
      <Trending/>
      </div>
      <div className='mt-40 w-full'>
      <Carousel/>
      <MiniCard/>
      <BigAd/>
      <Hot/>
      <HotCards/>
      <Ipl/>
      <SmallAd/>
      <VerticalCarousel/>
      <HorizontalCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
