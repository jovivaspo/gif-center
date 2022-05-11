import { createContext, useState } from "react";

const GifsContext = createContext()

const GifsProvider = ({children}) => {
    const [ gifs, setGifs ] = useState(null)

    const data = {gifs, setGifs}

    return (
        <GifsContext.Provider value={data}>{children}</GifsContext.Provider>
    )

}

export {GifsContext, GifsProvider}