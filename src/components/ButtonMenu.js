import React, { useState, useRef } from 'react'
import { FiAlignRight, FiX } from 'react-icons/fi'
import "./ButtonMenu.css"

const ButtonMenu = ({ openMenuMobil, setOpenMenuMobil }) => {

    const barRef = useRef()
    const XRef = useRef()

    const handleClick = () =>{
      
        if(!openMenuMobil){
            barRef.current.classList.add("hidden")
            XRef.current.classList.remove("hidden")
            setOpenMenuMobil(true)
        }else{
            barRef.current.classList.remove("hidden")
            XRef.current.classList.add("hidden")
            setOpenMenuMobil(false)
        }
    }

    return (
        <button className='menu-btn' onClick={handleClick}>
            <svg ref={barRef} rotate="-90deg" width="39" height="39" xmlns="http://www.w3.org/2000/svg" className="menu-icon bars"><g fill="none" fill-rule="evenodd"><path d="M0 0h39v39H0z"></path><path d="M12 12h-1v-2h19v2H12zm-4 9H7v-2h23v2H8zm4 8h-1v-2h19v2H12z" fill="#0CF"></path></g></svg>
            <svg ref={XRef} rotate="90deg" className="menu-icon X hidden" width="39" height="39" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h39v39H0z"></path><path fill="#0CF" d="M10.858 12.272l15.87 15.87.756.756 1.414-1.414-.756-.756-15.87-15.87-.756-.756-1.414 1.414z"></path><path fill="#0CF" d="M28.142 12.272l-15.87 15.87-.756.756-1.414-1.414.756-.756 15.87-15.87.756-.756 1.414 1.414z"></path></g></svg>
        </button>
    )
}

export default ButtonMenu