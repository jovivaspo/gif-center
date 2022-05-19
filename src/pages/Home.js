import React, { useState, useEffect } from 'react'
import BarTags from '../components/BarTags'
import Carousel from '../components/Carousel'
import Grid from '../components/Grid'
import { endpoints } from '../services/endpoints'
import { fetchData } from '../services/fetchData'
import './Home.css'

const Home = () => {
  const [tags, setTags] = useState(null)

  useEffect(() => {
   
    const loadContent = () => {
           const uri_term = endpoints.URL_TRENDING_TERM  +  endpoints.MY_KEY
           fetchData(uri_term)
           .then(res=>setTags(res.data))
        }
  
    loadContent()

}, [])

  return (
    <div className='home-container'>
      <Carousel title={"Trending Gifs"} url={endpoints.URL_TREDING_GIFS}/>
      <Carousel title={"Trending Stickers"} url={endpoints.URL_TREDING_STICKERS}  />
      { tags && <BarTags tags={tags} title={"Trending Terms"}/>}
      <Grid title={"Stories"}/>


    </div>
  )
}

export default Home