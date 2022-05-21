import { createContext, useState } from "react";

const SearchContext = createContext()

const SearchProvider = ({children}) =>{
    const searchStorage = localStorage.getItem("searchGif")? localStorage.getItem("searchGif")  : ""
    const [search, setSearch] = useState(searchStorage)

    const data = {search, setSearch}

    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    )
}

export {SearchContext, SearchProvider}