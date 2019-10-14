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
        this.props.handleSingleProject(this.props.match.params.id)
    }
    render() {
        const { singleProject } = this.props;
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