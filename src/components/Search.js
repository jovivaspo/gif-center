import { BsSearch } from 'react-icons/bs'
import {IoMdCloseCircleOutline} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { endpoints } from '../services/endpoints'
import { fetchData } from '../services/fetchData'
import './Search.css'

const Search = ({search, setSearch}) => {
const  navigate  = useNavigate()

    const handleSearch = (e) => {
        console.log(search)
        e.preventDefault()
        if(search === "") return false

        fetchData(`${endpoints.URL_SERCH_GIFS}${search}${endpoints.MY_KEY}`)
        .then(res => {
           if(res.message){
                alert(res.message)
                return false
           }
           console.log(res)
           navigate(`/search/${search}`) 
        })

        
    }

    const handleClose = (e) => {
        e.preventDefault()
        setSearch("")
        navigate("/")
    }
  
  return (
    <div className='search-container'>
        <form className='search-form' >
            <input className='search-input'
             type="text" placeholder='Search Gifs and Stickers'
             value={search}
             onChange={(e)=>setSearch(e.target.value)}/>
              <button className='search-btn' onClick={handleSearch}>
                <BsSearch color='#fff' size={20}/>
            </button>
            { search && <button className='search-close' onClick={handleClose}>
                <IoMdCloseCircleOutline color='#fff' size={22}/>
            </button>}
        </form>
    </div>
  )
}

export default Search