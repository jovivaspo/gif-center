import { useParams } from 'react-router-dom'
import { endpoints } from '../services/endpoints'
import Grid from '../components/Grid'
import './SearchPage.css'
import { useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'
import Select from '../components/Select'
import { SelectContext } from '../context/SelectContext'

const SearchPage = () => {
  const {setSearch} = useContext(SearchContext)
  const {select} = useContext(SelectContext)
  const url = useParams().search

  useEffect(()=>{
    setSearch(url)
  },[url])


  return (
    <div className='container_search'>
      <Select/>
      <Grid title={url}
       url={
         select === 1?
         `${endpoints.URL_SERCH_GIFS}${url}&api_key=${endpoints.API_KEY}` :
         `${endpoints.URL_SERCH_STICKERS}${url}&api_key=${endpoints.API_KEY}`
         } />
    </div>
  )
}

export default SearchPage