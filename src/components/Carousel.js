import React, { useEffect, useState, useRef } from 'react'
import { fetchData } from '../services/fetchData'
import './Carousel.css'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'

const Carousel = ({ title, url }) => {
    const [content, setContent] = useState([])
    const refCarousel = useRef()

    useEffect(() => {
        const loadContent = () => {
            fetchData(url).
                then(res => {
                    //console.log(res.data)
                    setContent(res.data)
                })
        }

        loadContent()

    }, [])

    const handleClick = (e) => {
        console.log(refCarousel.current.clientWidth)
        if (e.target.className === "left-icon" || e.target.parentNode.className === "left-icon") {
            console.log("left")
            refCarousel.current.scrollRight += 627;
            return false

        }

        if (e.target.className === "right-icon" || e.target.parentNode.className === "right-icon") {
            console.log("right")
            refCarousel.current.scrollLeft += 627;
            return false
        }
    }


    return (
        <div className='carousel-container'>
            <h3 className='carousel-title'>{title}</h3>
            <div className="carousel">
                <div className='left-icon' onClick={handleClick}> <BsChevronLeft size={24} color="#fff" /></div>
                <div className='right-icon' onClick={handleClick}> <BsChevronRight size={24} color="#fff" /></div>
                {content && <div className='content-container' ref={refCarousel}>
                    {content.map((el, index) => {
                        return <img className="img" key={index} src={el.images.fixed_height_small.webp || el.images.fixed_height_small.url} alt={el.title} />
                    })}
                </div>
                }
            </div>
        </div>
    )
}

export default Carousel