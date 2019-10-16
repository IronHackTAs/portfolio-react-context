import React, { Component } from 'react'
import { withProjectsConsumer } from '../../../contexts/ProjectsStore';
import Card from '../../molecules/projects/Card';

class SingleProject extends Component {
    state = {
        singleProject: {}
    }

    componentDidMount() {
        this.getProject();
    }

    getProject() {
        this.setState({
            ...this.state,
            singleProject: this.props.projects.filter(project => project.id === +this.props.match.params.id)[0]
        })
    }
    render() {
        const { singleProject } = this.state
        return (
            <div className="project-container">
                <section>
                    <div className="project-inside-container">
                        <Card singleProject={singleProject} />
                    </div>
                </section>
            </div>
        )
    }
}

export default withProjectsConsumer(SingleProject)