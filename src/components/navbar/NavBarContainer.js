import React from 'react';
import NavBar from './NavBar';
import { navbarChangeOpenState } from './../../redux/navbar-reducer'
import NavBarExposed from './NavBarExposed';
import { connect } from 'react-redux';
import { getCategoriesThuncCreator } from './../../redux/category-reducer';


class NavBarContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return <div>
            <NavBar logoPreloadFinished={this.props.logoPreloadFinished} changeNavBarOpenState={this.props.changeNavBarOpenState} navOpened={this.props.navOpened} />
            <NavBarExposed changeNavBarOpenState={this.props.changeNavBarOpenState} navOpened={this.props.navOpened} categories={this.props.categories} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        navOpened: state.navbar.navbarOpened,
        logoPreloadFinished: state.welcomePage.preloadLogoHidden,
        categories: state.category.categories
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNavBarOpenState: () => dispatch(navbarChangeOpenState()),
        getCategories: ()=> dispatch(getCategoriesThuncCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);