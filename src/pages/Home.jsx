import React from 'react'
import Carousel from '../components/website/Home/Carousel';
import Hero from '../components/website/Home/Hero';
import Introduction from '../components/website/Home/Introduction';
import LetsTalk from '../components/website/Home/LetsTalk';

const Home = () => {
  return (
    <>
      <Hero/>
      <Introduction/>
      <Carousel/>
      <LetsTalk/>
    </>
  )
}

export default Home;