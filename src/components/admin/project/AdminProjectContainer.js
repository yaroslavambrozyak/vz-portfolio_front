import React from 'react';
import AdminProjectList from './AdminProjectList';
import AdminProjectForm from './AdminProjectForm'
import { connect } from 'react-redux';
import { getProjects, createProject, getProject, updateProject } from './../../../redux/project-reducer';
import { getCategoriesThuncCreator } from './../../../redux/category-reducer';

class AdminProjectContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { editMode: false };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleEditButtonEvent = this.handleEditButtonEvent.bind(this);
    }

    componentDidMount() {
        this.props.getProjects();
        this.props.getCategoriesThuncCreator();
    }

    handleFormSubmit(data) {
        if (this.state.editMode) {
            let m = {
                name: data.name,
                categoryId: data.category
            }
            this.props.updateProject(this.props.project.id,m);
            this.setState({ editMode: false })
        } else {
            let m = {
                name: data.name,
                categoryId: data.category
            }
            this.props.createProject(m);
        }
    }

    handleEditButtonEvent(id) {
        this.props.getProject(id);
        this.setState({ editMode: true });
    }

    render() {
        let initVal = {};
        if (this.state.editMode && this.props.project) {
            initVal = {
                name: this.props.project.name,
                category: this.props.project?.category?.id,
            }
        }

        return <div>
            <AdminProjectList projects={this.props.projects} onEditButtonClickEvent={this.handleEditButtonEvent} />
            <AdminProjectForm onSubmit={this.handleFormSubmit} categories={this.props.categories} initialValues={initVal} />
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects,
        categories: state.category.categories,
        project: state.project.project
    }
}

export default connect(mapStateToProps, { getProjects, getCategoriesThuncCreator, createProject, getProject, updateProject })(AdminProjectContainer);