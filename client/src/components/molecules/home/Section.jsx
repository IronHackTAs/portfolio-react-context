import React, { Component } from 'react'
import { projectsService } from '../../../services'
import Article from '../../atoms/home/Article'

export default class Section extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        this.getProjects();
    }

    async getProjects() {
        this.setState({ ...this.state, projects: await projectsService.getProjects() })
    }

    render() {
        return (
            <section className="section-home">
                {
                    this.state.projects.map(data => <Article key={data.id} project={data} />)
                }
            </section>
        )
    }
}
