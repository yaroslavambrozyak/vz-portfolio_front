import React from 'react';
import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { setPortfolioArtsAC } from './../redux/portfolio-reducer'

let mapStateToProps = (state) => {
    return {
        arts: state.portfolio.arts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPortfolioArts: (arts) => dispatch(setPortfolioArtsAC(arts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);