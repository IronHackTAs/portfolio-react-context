import React, { Component } from 'react'

const ALL_PROJECTS = 'all-projets';
const ONE_PROJECT = 'one-projet';

const ProjectsContext = React.createContext();

class ProjectsStore extends Component {

    state = {
        projects: JSON.parse(localStorage.getItem(ALL_PROJECTS) || '[]'),
        singleProject: JSON.parse(localStorage.getItem(ONE_PROJECT) || '{}'),
    }

    handleGetProjects = (projects) => {
        this.setState({ projects: projects });
        localStorage.setItem(ALL_PROJECTS, JSON.stringify(projects));
    }

    handleSingleProject = (projectId) => {
        const singleProject = this.state.projects.filter(project => project.id === +projectId)[0]
        this.setState({ singleProject: singleProject });
        localStorage.setItem(ONE_PROJECT, JSON.stringify(singleProject));
    }

    render() {
        return (
            <ProjectsContext.Provider value={{
                projects: this.state.projects,
                singleProject: this.state.singleProject,
                handleGetProjects: this.handleGetProjects,
                handleSingleProject: this.handleSingleProject
            }}>
                {this.props.children}
            </ProjectsContext.Provider>
        )
    }
}

const withProjectsConsumer = (Component) => {
    return (props) => (
        <ProjectsContext.Consumer>
            {(storeProps) => <Component {...props} {...storeProps} />}
        </ProjectsContext.Consumer>
    )
}

export { ProjectsContext, ProjectsStore, withProjectsConsumer }
