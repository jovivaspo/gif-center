
import BarTags from '../components/BarTags'
import Carousel from '../components/Carousel'
import Grid from '../components/Grid'
import { endpoints } from '../services/endpoints'
import './Home.css'

const Home = () => {

  return (

    <div className='home-container'>
      <Carousel title={"Trending Stickers"} url={endpoints.URL_TREDING_STICKERS} />
      {<BarTags title={"Trending Terms"} url={endpoints.URL_TRENDING_TERM + endpoints.MY_KEY} />}
      {

        localStorage.getItem("searchGif") ?
          <Grid title={"Last Search: " + localStorage.getItem("searchGif")} url={`${endpoints.URL_SERCH_GIFS}${localStorage.getItem("searchGif")}&api_key=${endpoints.API_KEY}`} />
          :
          <Grid title={"Trending Gifs"} url={endpoints.URL_TREDING_GIFS} />}
    </div>)



}

export default Home