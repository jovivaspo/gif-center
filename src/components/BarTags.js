import React from 'react'
import "./BarTags.css"

const BarTags = ({ tags, title }) => {

    return (
        <div className='barTags_container'>
            <h3 className='bar_tags_title'>{title}</h3>
            <div className='bar_tags'>
                {tags.map((tag, index) => {
                    return (
                        <div key={index} className="container_tag">
                            <span className='tag'>#{tag.name?.replace(/ /g, "") || tag.replace(/ /g, "")}</span>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default BarTags