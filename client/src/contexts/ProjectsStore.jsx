import React, { Component } from 'react'

const ALL_PROJECTS = 'all-projets';

const ProjectsContext = React.createContext();

class ProjectsStore extends Component {

    state = {
        projects: JSON.parse(localStorage.getItem(ALL_PROJECTS) || '[]')
    }

    handleGetProjects = (projects) => {
        this.setState({ projects: projects });
        localStorage.setItem(ALL_PROJECTS, JSON.stringify(projects));
    }

    render() {
        return (
            <ProjectsContext.Provider value={{
                projects: this.state.projects,
                handleGetProjects: this.handleGetProjects
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
