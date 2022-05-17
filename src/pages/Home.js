import React from 'react'
import Carousel from '../components/Carousel'
import { endpoints } from '../services/endpoints'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Carousel title={"Trending Gifs"} url={endpoints.URL_TREDING_GIFS}/>
      <Carousel title={"Trending Stickers"} url={endpoints.URL_TREDING_STICKERS}  />
      <div className='home-galery'>
        <h3 className='carousel-titel'>Stories</h3>
      </div>


    </div>
  )
}

export default Home