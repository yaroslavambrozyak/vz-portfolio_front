import React from 'react';
import { artsApi } from './../../../api/art-api';
import AdminArt from './AdminArt';
import { connect } from 'react-redux';
import { getCategoriesThuncCreator } from './../../../redux/category-reducer';
import { getProjects } from './../../../redux/project-reducer';
import { getArt } from './../../../redux/art-reducer';

class AdminArtContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategoriesThuncCreator();
        this.props.getProjects();
        let id = this.props.match.params.id;
        if (id) {
            this.props.getArt(id);
        }
    }

    onArtPost(e) {
        let payload = {
            name: e.name,
            description: e.description,
            categoryId: e.category,
            projectId: e.project,
            separateView: e.separateView,
            col: e.col,
            row: e.row
        }
        artsApi.postArt(payload, e.arts);
    }

    render() {
        let initVal={};
        if (this.props.art.id != '') {
            initVal = { ...this.props.art, category: { id: "qN2Nas", name: "other" } }
            
        }
        return <AdminArt onSubmit={this.onArtPost} categories={this.props.categories} projects={this.props.projects} initialValues={initVal} />
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.category.categories,
        projects: state.project.projects,
        art: state.art.art
    }
}



export default connect(mapStateToProps, { getCategoriesThuncCreator, getProjects, getArt })(AdminArtContainer);