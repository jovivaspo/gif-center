import { useEffect, useState } from "react"

const useObserver = (target,options) => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    
    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            const [entry] = entries
            setIsIntersecting(entry.isIntersecting)
        },[options])

        if(target.current) observer.observe(target.current)
        return ()=>{
            if(target.current) observer.unobserve(target.current)
        }
    },[target])

    return isIntersecting
}

export {useObserver}