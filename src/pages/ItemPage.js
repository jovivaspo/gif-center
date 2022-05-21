import { useParams } from 'react-router-dom'
import { endpoints } from '../services/endpoints'
import Item from '../components/Item'
import BarTags from '../components/BarTags'


const ItemPage = () => {
  
    const { slug } = useParams()
    const id = slug.split("-").pop()
    const term = slug.split("-")[0]


    const uri_gif = endpoints.API_URL_GIFS + `/${id}${endpoints.MY_KEY}`
    const uri_term_related = endpoints.URL_TAG_TERM + `/${term}${endpoints.MY_KEY}`

    return (
        <>
         {<Item url={uri_gif}/>}
         {<BarTags  title={"Related Terms"} url={uri_term_related}/>}
        </>
       
    )
}

export default ItemPage
