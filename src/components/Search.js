import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import {  useLocation, useNavigate } from 'react-router-dom'
import './Search.css'

const Search = () => {
    const navigate = useNavigate()
    const [searchBar, setSearchBar] = useState("")
    const location = useLocation()
   
 
    const handleSearch = (e) => {
        e.preventDefault()
        if (searchBar === "") return false
        localStorage.setItem("searchGif", searchBar)
        navigate(`/gif-center/search/${searchBar}`)
    }

    const handleClose = (e) => {
        e.preventDefault()
        setSearchBar("")
        navigate("/gif-center")
    }

    useEffect(()=>{
        if(!location.pathname.includes('search') || !location.pathname.includes(searchBar)){
            setSearchBar("")
        }
    },[location])

    return (
        <div className='search-container'>
            <form className='search-form' >
                <input className='search-input'
                    type="text" placeholder='Search Gifs and Stickers'
                    value={searchBar}
                    onChange={(e) => setSearchBar(e.target.value)} />
                <button className='search-btn' onClick={handleSearch}>
                    <BsSearch color='#fff' size={20} />
                </button>
                {searchBar && <button className='search-close' onClick={handleClose}>
                    <IoMdCloseCircleOutline color='#fff' size={22} />
                </button>}
            </form>
        </div>
    )
}

export default Search