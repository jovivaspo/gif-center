const API_KEY = process.env.REACT_APP_API_KEY

const API_URL_GIFS='https://api.giphy.com/v1/gifs'
const CATEGORY_TREDING=`${API_URL_GIFS}/trending`
const N_OBJECT='30'
const URL_TREDING=`${CATEGORY_TREDING}?api_key=${API_KEY}&limit=${30}&rating=g`

const MY_KEY = `&api_key=${API_KEY}`
const URL_SERCH_GIFS=`${API_URL_GIFS}/search?q=`

const API_URL_STICKERS="https://api.giphy.com/v1/stickers"
const URL_SERCH_STICKERS=`${API_URL_STICKERS}/search?q=`
const CATEGORY_TREDING_STICKERS=`${API_URL_STICKERS}/trending`
const URL_TREDING_STICKERS=`${CATEGORY_TREDING_STICKERS}?api_key=${API_KEY}&limit=${30}&rating=g`


export const endpoints = {
    API_KEY,
    API_URL_GIFS,
    CATEGORY_TREDING,
    N_OBJECT,
    URL_TREDING,
    URL_SERCH_GIFS,
    API_URL_STICKERS,
    CATEGORY_TREDING_STICKERS,
    URL_TREDING_STICKERS,
    URL_SERCH_STICKERS,
    MY_KEY
}