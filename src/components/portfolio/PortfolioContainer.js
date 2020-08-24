import React from 'react';
import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { setPortfolioArtsAC, toggleFetchingAC } from './../../redux/portfolio-reducer';
import {finishPreloadLogoAC} from './../../redux/welcome-reducer';

class PortfolioContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toogleFetchProgressBar(true);
        let data = [{
            id: 'Qew23FSAsds',
            title: 'HelloBob',
            imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/028/673/667/large/vlx-zvarun-dante-break-solo.jpg?1595176133'
        },
        {
            id: 'qweEEwew',
            title: 'Heqqq',
            imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/028/412/651/large/vlx-zvarun-study-8.jpg?1594394775'
        },
        {
            id: 'qweEE123ds',
            title: 'Hegg',
            imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/028/345/289/large/vlx-zvarun-adam-break.jpg?1594205477'
        }];
        this.props.setPortfolioArts(data);
        this.props.disableFirstLogoPreloader();
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