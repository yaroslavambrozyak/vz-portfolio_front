import React from 'react';
import NavBar from './NavBar';
import { navbarChangeOpenState } from './../../redux/navbar-reducer'
import NavBarExposed from './NavBarExposed';
import { connect } from 'react-redux';

class NavBarContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <NavBar changeNavBarOpenState={this.props.changeNavBarOpenState} navOpened={this.props.navOpened} />
            <NavBarExposed changeNavBarOpenState={this.props.changeNavBarOpenState} navOpened={this.props.navOpened} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        navOpened: state.navbar.navbarOpened
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNavBarOpenState: () => dispatch(navbarChangeOpenState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);