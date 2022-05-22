import React, { useEffect, useRef, useContext } from 'react'
import { SelectContext } from '../context/SelectContext'
import "./Select.css"

const Select = () => {
    const {select, setSelect } = useContext(SelectContext)
    const gif = useRef()
    const sticker = useRef()
  
useEffect(()=>{
    if(select === 1 && !gif.current.classList.contains("select")){
        gif.current.classList.add("select")
        sticker.current.classList.remove("select")
    }
    if(select === 2 && !sticker.current.classList.contains("select")){
        gif.current.classList.remove("select")
        sticker.current.classList.add("select")
    }
},[select])


  return (
    <div className='select_container'>
        <button ref={gif} className='gif select' onClick={()=>setSelect(1)}>GIF</button>
        <button ref={sticker} className='sticker' onClick={()=>setSelect(2)}>Sticker</button>
    </div>
  )
}

export default Select