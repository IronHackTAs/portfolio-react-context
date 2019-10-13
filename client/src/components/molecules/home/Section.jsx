import React, { Component } from 'react'
import { projectsService } from '../../../services'

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
            <div>

            </div>
        )
    }
}
