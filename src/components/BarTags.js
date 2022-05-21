import {useState, useEffect} from 'react'
import "./BarTags.css"
import { fetchData } from '../services/fetchData'
import { Link } from 'react-router-dom'

const BarTags = ({ title, url }) => {

    const [tags, setTags] = useState(null)

    useEffect(() => {
   
        const loadContent = (url) => {
               fetchData(url)
               .then(res=>setTags(res.data))
            }
      
        loadContent(url)
    
    }, [])

    return (
        <div className='barTags_container'>
            <h3 className='bar_tags_title'>{title}</h3>
            <div className='bar_tags'>
                {tags && tags.map((tag, index) => {
                    return (
                        <Link to={`/search/${tag.name || tag}`} key={index} className="container_tag">
                            <span className='tag'>#{tag.name?.replace(/ /g, "") || tag.replace(/ /g, "")}</span>
                        </Link>
                    )
                })}
            </div>
        </div>

    )
}

export default BarTags