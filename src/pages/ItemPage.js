import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../services/fetchData'
import { endpoints } from '../services/endpoints'
import Item from '../components/Item'
import BarTags from '../components/BarTags'


const ItemPage = () => {
    const [content, setContent] = useState(null)
    const [tags, setTags] = useState(null)
  
    const { id } = useParams()

    useEffect(() => {
        const uri_gif = endpoints.API_URL_GIFS + `/${id}${endpoints.MY_KEY}`
        const loadContent = async () => {
           fetchData(uri_gif)
           .then(res=>{
               setContent(res.data)
               const uri_term = endpoints.URL_TAG_TERM +  `/${res.data.title}${endpoints.MY_KEY}`
               fetchData(uri_term)
               .then(res=>setTags(res.data))
            })
        }

        loadContent()

    }, [])

    return (
        <>
         {content && <Item content={content}/>}
         {tags && <BarTags tags={tags} title={"Related Terms"}/>}
        </>
       
    )
}

export default ItemPage
