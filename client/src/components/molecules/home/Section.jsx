import React, { Component } from 'react'
import { projectsService } from '../../../services'
import Article from '../../atoms/home/Article'
import { withProjectsConsumer } from '../../../contexts/ProjectsStore';

class Section extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        this.getProjects();
    }

    async getProjects() {
        const projects = await projectsService.getProjects();
        this.setState({ ...this.state, projects: projects }, () => this.props.handleGetProjects(projects))
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

export default withProjectsConsumer(Section)
