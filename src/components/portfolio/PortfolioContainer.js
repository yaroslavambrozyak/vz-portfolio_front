import React from 'react';
import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { setPortfolioArtsAC, toggleFetchingAC } from './../../redux/portfolio-reducer';
import { finishPreloadLogoAC } from './../../redux/welcome-reducer';
import axios from "axios";

class PortfolioContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toogleFetchProgressBar(true);

        axios.get('http://localhost:8080/api/arts')
            .then(response => {
                this.props.setPortfolioArts(response.data);
                this.props.disableFirstLogoPreloader();
            });
    }

    render() {
        return <div>
            <Portfolio arts={this.props.arts} setPortfolioArts={this.props.setPortfolioArts} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        arts: state.portfolio.arts,
        isFetching: state.portfolio.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPortfolioArts: (arts) => dispatch(setPortfolioArtsAC(arts)),
        toogleFetchProgressBar: (isFetching) => dispatch(toggleFetchingAC(isFetching)),
        disableFirstLogoPreloader: () => dispatch(finishPreloadLogoAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);