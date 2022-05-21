import { useState, useEffect, useRef, useContext } from 'react'
import "./Grid.css"
import { fetchData } from '../services/fetchData'
import { Link } from 'react-router-dom'
import { useObserver } from '../services/useObserver'
import { endpoints } from '../services/endpoints'
import { SearchContext } from '../context/SearchContext'


const Grid = ({ url, title }) => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const {search} = useContext(SearchContext)


  const nextRef = useRef()
  const isVisible = useObserver(nextRef, {
    rootMargin: "10px",
    threhold: 0
  })


  useEffect(() => {
    const loadContent = () => {
      fetchData(url).
        then(res => {
          //console.log(res.data)
          setItems(res.data)
        })
    }
    loadContent(url)
  }, [search])

  useEffect(() => {
    if (isVisible){
      const loadContent = () => {
        fetchData(url).
          then(res => {
            //console.log(res.data)
            setItems([...items,
            ...res.data
            ])
            const nextPage = page + 1
            setPage(nextPage)
          })
      }
  
      loadContent(`${url}&offset=${endpoints.N_OBJECT * page}`)
    }
   
  })



  return (
    <div className='grid_containter'>
      <h3 className="grid_title">{title}</h3>
      {items &&
        <div className="grid">
          {items.map((item, index) => {
            return (
              <div  key={index} className="container_item">
                <Link to={`/${item.type}/${item.slug}`} className="item_link">
                  <img loading="lazy" src={item.images.preview_webp.url || ""} alt={item.title} className="img_item" />
                </Link>
              </div>

            )
          })}
        </div>
      }
     {items && <div className='next_page' ref={nextRef}>Next Page</div>}
    </div>
  )
}

export default Grid
