import { useParams } from 'react-router-dom'
import { endpoints } from '../services/endpoints'
import Grid from '../components/Grid'
import './SearchPage.css'
import { useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'

const SearchPage = () => {
  const {setSearch} = useContext(SearchContext)
  const url = useParams().search

  useEffect(()=>{
    setSearch(url)
  },[url])
 
  return (
    <div className='container_search'>
      <Grid title={url} url={`${endpoints.URL_SERCH_GIFS}${url}&api_key=${endpoints.API_KEY}`} />
    </div>
  )
}

export default SearchPage