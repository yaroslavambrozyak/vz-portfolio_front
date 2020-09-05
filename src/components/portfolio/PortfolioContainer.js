import React from 'react';
import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { setPortfolioArtsAC, toggleFetchingAC } from './../../redux/portfolio-reducer';
import { finishPreloadLogoAC } from './../../redux/welcome-reducer';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import TransitionWrapper from '../common/transition/TransitionWrapper';

class PortfolioContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toogleFetchProgressBar(true);
        const { category } = this.props.match.params;
        let c = category !== undefined ? category : 'portfolio';
        /*let url = `http://localhost:8080/api/arts/${c}`
        axios.get(url)
            .then(response => {
                this.props.setPortfolioArts(response.data);
                this.props.disableFirstLogoPreloader();
            });*/
        this.props.setPortfolioArts([
            {"id":"qweDFV","name":"bob","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/029/955/871/20200903093801/smaller_square/vlx-zvarun-study15.jpg?1599143882","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/029/955/871/large/vlx-zvarun-study15.jpg?1599143882"},
            {"id":"qqwe1","name":"test","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/673/665/20200719112928/smaller_square/vlx-zvarun-dante-break.jpg?1595176168","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/673/667/large/vlx-zvarun-dante-break-solo.jpg?1595176133"},
            {"id":"ggSew","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/018/762/520/20190615124308/smaller_square/vlx-zvarun-study-6s.jpg?1560620589","imageUrl":"https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589"},
            {"id":"ggSe3","name":"testSd","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/388/297/20190529200950/smaller_square/vlx-zvarun-study-2.jpg?1559178590","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/388/297/large/vlx-zvarun-study-2.jpg?1559178590"}
        ]);
        this.props.disableFirstLogoPreloader();
    }

    render() {
        return <Portfolio
                arts={this.props.arts}
                setPortfolioArts={this.props.setPortfolioArts}
                isNavBarOpened={this.props.navbarOpened}
                preloadLogoHidden={this.props.preloadLogoHidden}
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

let mapDispatchToProps = (dispatch) => {
    return {
        setPortfolioArts: (arts) => dispatch(setPortfolioArtsAC(arts)),
        toogleFetchProgressBar: (isFetching) => dispatch(toggleFetchingAC(isFetching)),
        disableFirstLogoPreloader: () => dispatch(finishPreloadLogoAC())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer));