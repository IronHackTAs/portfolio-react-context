import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({ project }) => {
    return (
        <article className="article-home">
            <div>
                <img src={project.image} alt="" />
            </div>
            <div>
                <h3>{project.title}</h3>
                <p>{project.content}</p>
                <Link to={`/project/${project.id}`} ><span className="capitalize">ver</span> proyecto</Link>
            </div>
        </article>
    )
}

export default Article;
