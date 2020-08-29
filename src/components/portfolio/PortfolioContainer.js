import React from 'react';
import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { setPortfolioArtsAC, toggleFetchingAC } from './../../redux/portfolio-reducer';
import { finishPreloadLogoAC } from './../../redux/welcome-reducer';
import axios from "axios";
import { withRouter } from 'react-router-dom';

class PortfolioContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toogleFetchProgressBar(true);
        const { category } = this.props.match.params;
        let c = category !== undefined ? category : 'portfolio';
        let url = `http://localhost:8080/api/arts/${c}`
        axios.get(url)
            .then(response => {
                this.props.setPortfolioArts(response.data);
                this.props.disableFirstLogoPreloader();
            });
    }

    render() {
        return <div>
            <Portfolio arts={this.props.arts} setPortfolioArts={this.props.setPortfolioArts} isNavBarOpened={this.props.navbarOpened} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        arts: state.portfolio.arts,
        isFetching: state.portfolio.isFetching,
        navbarOpened: state.navbar.navbarOpened
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPortfolioArts: (arts) => dispatch(setPortfolioArtsAC(arts)),
        toogleFetchProgressBar: (isFetching) => dispatch(toggleFetchingAC(isFetching)),
        disableFirstLogoPreloader: () => dispatch(finishPreloadLogoAC())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer));