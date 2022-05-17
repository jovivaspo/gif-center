import React from 'react'
import { useParams } from 'react-router-dom'
import './SearchPage.css'

const SearchPage = () => {
  const{search} = useParams()
  return (
    <div className='container_search'>
      <h3 className='title_search'>{search}</h3>
    </div>
  )
}

export default SearchPage