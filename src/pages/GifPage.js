import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../services/fetchData'
import { endpoints } from '../services/endpoints'
import './GifPage.css'
import { SiTelegram } from 'react-icons/si'

const GifOrSticker = () => {
    const [content, setContent] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        const uri = endpoints.API_URL_GIFS + `/${id}${endpoints.MY_KEY}`
        const loadContent = () => {
            fetchData(uri)
                .then(res => setContent(res.data))
        }
        loadContent()
    }, [])

    console.log(content)

    return (
        <div className='container'>
            <div className='container_img'>
                <img className="img_main" src={content?.images.downsized_medium.url} alt={content?.title} />
            </div>
            <div className='container_info'>
                <img className="img_info" src={content?.images.fixed_width_small.webp} />
                <div className="text">
                    <p>{content?.title}</p>
                    <p>{content?.user.display_name}</p>
                </div>
                <div className='container_icon'>
                    <SiTelegram size={32}/>
                </div>
            </div>
            <div>grid with related</div>
        </div>

    )
}

export default GifOrSticker
