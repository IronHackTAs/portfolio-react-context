import React from 'react'

const Card = ({ singleProject }) => {
    return (
        <div className="project-card">
            <div>
                <img src={`../${singleProject.image}`} alt="" />
            </div>
            <div>{console.log(singleProject.image)}
                <h3>{singleProject.title}</h3>
                <p>{singleProject.content}</p>
            </div>
        </div>
    )
}

export default Card;