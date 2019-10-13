import React from 'react'

const Article = ({ project }) => {
    return (
        <article className="article-home">
            <div>
                <img src={project.image} alt="" />
            </div>
            <div>
                <h3>{project.title}</h3>
                <p>{project.content}</p>
                <button><span className="capitalize">ver</span> proyecto</button>
            </div>
        </article>
    )
}

export default Article;
