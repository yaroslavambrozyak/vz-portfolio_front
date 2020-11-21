import React from 'react';
import { connect } from 'react-redux';
import GridView from './GridView'
import { setCategory, setSortedArts, getArtsByCategoryName, changeCategory, getCategories, submitOrder } from './../../../redux/admin-grid-view-reducer';
import GridEditView from './GridEditView'
import Dropdown from 'react-dropdown';
import {withRouter} from "react-router-dom"

class GridViewContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onArtClick = this.onArtClick.bind(this);
        this.state = {editMode:false}
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
        this.props.changeCategory(this.mapDropDownToCategory(category));
    }

    onSort(sorted){
        this.props.setSortedArts(sorted);
    }

    onSubmit(){
        this.props.submitOrder();
    }

    onArtClick(art){
        let path = `/admin/arts/edit/${art.id}`;
        let history = this.props.history;
        history.push(path);
    }

    mapCategoryToDropDown = (c) => ({ value: c.id, label: c.name });
    
    mapDropDownToCategory = (c) => ({id:c.value, name: c.label});

    render() {
        let categories = this.props.categories.map(c => this.mapCategoryToDropDown(c));
        return <div>
            <button onClick={()=>this.setState(previousState=>({editMode: !previousState.editMode}))}>{this.state.editMode? 'Back to Grid':'Edit Grid Mode'}</button>
            <Dropdown options={categories} onChange={(category) => this.onCategoryChange(category)} 
            value={this.mapCategoryToDropDown(this.props.choosedCategory)} placeholder="Select an option" />;
            {this.state.editMode ? 
            (
                <GridEditView categories={this.props.categories}
                arts={this.props.arts} onCategoryChange={this.onCategoryChange.bind(this)}
                choosedCategory={this.props.choosedCategory} onSort={this.onSort.bind(this)}
                onSubmit={this.onSubmit.bind(this)}/>
            ):(
                <GridView arts={this.props.arts} onArtClick={this.onArtClick} />
            )}
        </div>
    }

}

let mapStateToProps = (state) => ({
    categories: state.category.categories,
    arts: state.adminGridView.sortedArts,
    choosedCategory: state.adminGridView.choosedCategory
})

export default withRouter(connect(mapStateToProps, {
    setCategory, setSortedArts,
    getArtsByCategoryName, changeCategory, getCategories, submitOrder
})(GridViewContainer));