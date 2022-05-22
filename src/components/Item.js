import { useState, useEffect } from 'react'
import { SiTelegram } from 'react-icons/si'
import { fetchData } from '../services/fetchData'
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

    const handleShare = async () => {
        try {
            const type = content.type === 'sticker' || content.type === 'emoji' ? "webp" : content.type
            const img = await fetch(`https://i.giphy.com/media/${content.id}/giphy.${type}`)
            const blob = await img.blob()
            const file = new File([blob], `${content.name}.${type}`, { type: blob.type, })
            const dataShare = {
                title: content.name,
                text:content.name,
                files: [file],
            }
            
            if (navigator.canShare(dataShare)) {
                await navigator.share(dataShare)
            } else {
                alert("Share API is not supported")
            }

        } catch (err) {
            alert("Share API is not supported")
            console.log(err)
        }
    }

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
                    <p>{content?.user ? content?.user.display_name : ""}</p>
                </div>
                <div className='container_icon'
                    onClick={handleShare}>
                    <SiTelegram size={32} />
                </div>
            </div>
        </div>
    )
}



export default Item