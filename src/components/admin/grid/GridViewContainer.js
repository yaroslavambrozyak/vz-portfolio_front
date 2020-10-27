import React from 'react';
import { connect } from 'react-redux';
import GridView from './GridView'
import { setCategory, setSortedArts, getArtsByCategoryName, changeCategory, getCategories, submitOrder } from './../../../redux/admin-grid-view-reducer';

class GridViewContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategories();
    }

    componentDidUpdate() {
        if (this.props.categories && this.props.categories.length > 0 && !this.props.choosedCategory) {
            this.props.changeCategory(this.props.categories[0]);
        }
    }

    onCategoryChange(category) {
        this.props.changeCategory(category);
    }

    onSort(sorted){
        this.props.setSortedArts(sorted);
    }

    onSubmit(){
        this.props.submitOrder();
    }

    render() {
        return <div>
            <GridView categories={this.props.categories}
                arts={this.props.arts} onCategoryChange={this.onCategoryChange.bind(this)}
                choosedCategory={this.props.choosedCategory} onSort={this.onSort.bind(this)}
                onSubmit={this.onSubmit.bind(this)} />
        </div>
    }

}

let mapStateToProps = (state) => ({
    categories: state.category.categories,
    arts: state.adminGridView.sortedArts,
    choosedCategory: state.adminGridView.choosedCategory
})

export default connect(mapStateToProps, {
    setCategory, setSortedArts,
    getArtsByCategoryName, changeCategory, getCategories, submitOrder
})(GridViewContainer);