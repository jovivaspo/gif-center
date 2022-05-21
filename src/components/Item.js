import { useState, useEffect, useContext,useRef } from 'react'
import { SiTelegram } from 'react-icons/si'
import { LoadingContext } from '../context/LoadingContext'
import { fetchData } from '../services/fetchData'
import { useObserver } from '../services/useObserver'
import './Item.css'

const Item = ({ url }) => {

    const [content, setContent] = useState(null)

    useEffect(() => {
        const loadContent = (url) => {
            fetchData(url)
                .then(res => {
                    setContent(res.data)
                })
        }
        loadContent(url)

    }, [])


    return (
        <div className='container'>
            <div className='container_img'>
                <img className="img_main"
                    loading='lazy'
                    src={content?.images.downsized_medium.url}
                    alt={content?.title} />
            </div>
            <div className='container_info'>
                <img className="img_info"
                    loading='lazy'
                    src={content?.images.fixed_width_small.webp}
                />
                <div className="text">
                    <p>{content?.title}</p>
                    <p>{content?.user? content?.user.display_name :  ""}</p>
                </div>
                <div className='container_icon'>
                    <SiTelegram size={32} />
                </div>
            </div>
        </div>
    )
}



export default Item