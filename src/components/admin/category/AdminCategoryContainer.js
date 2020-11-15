import React from 'react'
import { getCategoriesThuncCreator, postCategory, getCategory, updateCategory } from './../../../redux/category-reducer'
import { connect } from 'react-redux';
import AdminCategoryList from './AdminCategoriesList'
import AdminCategoryForm from './AdminCategoryForm'

class AdminCategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    componentDidMount() {
        this.props.getCategoriesThuncCreator();
    }

    handleCategoryEditEvent(categoryId) {
        this.setState({ editMode: true });
        this.props.getCategory(categoryId);
    }

    handleFormSubmit(category) {
        if (this.state.editMode) {
            this.setState({ editMode: false });
            this.props.updateCategory(this.props.category.id, category);
        } else {
            this.props.postCategory(category);
        }
    }

    render() {
        let initValues = {};
        if (this.state.editMode && this.props.category.id) {
            initValues = { ...this.props.category };
        }
        return <div>
            <AdminCategoryList categories={this.props.categories} onEditButtonClickEvent={this.handleCategoryEditEvent.bind(this)} />
            <AdminCategoryForm onSubmit={this.handleFormSubmit.bind(this)} initialValues={initValues} />
        </div>
    }

}

let mapStateToProps = (state) => ({
    categories: state.category.categories,
    category: state.category.category
});

export default connect(mapStateToProps, { getCategoriesThuncCreator, postCategory, getCategory, updateCategory })(AdminCategoryContainer);