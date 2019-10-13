import React, { Component } from 'react'
import { withProjectsConsumer } from '../../../contexts/ProjectsStore';

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
            <div>
                <h2>hola</h2>
            </div>
        )
    }
}

export default withProjectsConsumer(SingleProject)