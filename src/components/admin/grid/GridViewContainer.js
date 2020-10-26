import React from 'react';
import { connect } from 'react-redux';
import { getCategoriesThuncCreator } from './../../../redux/category-reducer';
import GridView from './GridView'
import {setCategory, setSortedArts, getArtsByCategoryName} from './../../../redux/admin-grid-view-reducer';

class GridViewContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategoriesThuncCreator();
    }

    componentDidUpdate(){
        if (this.props.categories && this.props.categories.length > 0 && this.props.arts.length == 0) {
            let category = this.props.categories[0];
            this.props.setCategory(category);
            this.props.getArtsByCategoryName(category.name);
        }
    }


    render() {
        return <div>
            <GridView categories={this.props.categories} arts={this.props.arts} />
        </div>
    }

}

let mapStateToProps = (state) => ({
    categories: state.category.categories,
    arts: state.adminGridView.sortedArts
})

export default connect(mapStateToProps, {getCategoriesThuncCreator, setCategory, setSortedArts, getArtsByCategoryName})(GridViewContainer);