import { useState, useEffect } from 'react'
import "./Grid.css"
import { fetchData } from '../services/fetchData'
import { Link } from 'react-router-dom'

const Grid = ({ url, title }) => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const loadContent = () => {
      fetchData(url).
        then(res => {
          //console.log(res.data)
          setItems(res.data)
        })
    }
    loadContent(url)
  }, [])

  console.log(items)

  return (
    <div className='grid_containter'>
      <h3 className="grid_title">{title}</h3>
      {items &&
        <div className="grid">
          {items.map((item, index) => {
            return (
              <div className="container_item">
                <Link to={`/${item.type}/${item.slug}`} key={index} className="item_link">
                  <img loading="lazy" src={item.images.preview_webp.url} alt={item.title} className="img_item" />
                </Link>
              </div>

            )
          })}
        </div>
      }
    </div>
  )
}

export default Grid
