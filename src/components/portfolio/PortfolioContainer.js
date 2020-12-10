import React from 'react';
import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { withRouter } from 'react-router-dom';
import { getPortfolioArtsThunkCreator } from './../../redux/portfolio-reducer';
import { navbarChangeOpenState } from './../../redux/navbar-reducer'


class PortfolioContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let categoryType = this.props.match.params.types;
        let type = this.props.match.params.type;
        this.props.getPortfolioArtsThunkCreator(categoryType, type);
    }

    render() {
        return <Portfolio
            arts={this.props.arts}
            setPortfolioArts={this.props.setPortfolioArts}
            isNavBarOpened={this.props.navbarOpened}
            preloadLogoHidden={this.props.preloadLogoHidden}
            onTransparentContainerClick={this.props.changeNavBarOpenState}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        arts: state.portfolio.arts,
        isFetching: state.portfolio.isFetching,
        navbarOpened: state.navbar.navbarOpened,
        preloadLogoHidden: state.welcomePage.preloadLogoHidden
    }
}

let mapDispatchToProps = (dispatch) => ({
    getPortfolioArtsThunkCreator: () => dispatch(getPortfolioArtsThunkCreator()),
    changeNavBarOpenState: () => dispatch(navbarChangeOpenState())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer));