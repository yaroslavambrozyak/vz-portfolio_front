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
            {"id":"qweDFV","name":"bob","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/029/955/871/large/vlx-zvarun-study15.jpg?1599143882","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/029/955/871/large/vlx-zvarun-study15.jpg?1599143882", "row":2, "col":3},
            {"id":"qqwe1","name":"test","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/028/866/934/large/vlx-zvarun-limbo.jpg?1595770057","imageUrl":"https://cdna.artstation.com/p/assets/images/images/028/866/934/large/vlx-zvarun-limbo.jpg?1595770057", "row":2, "col":1},
            {"id":"ggSew","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/343/497/large/vlx-zvarun-gate.jpg?1594201119","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/343/497/large/vlx-zvarun-gate.jpg?1594201119", "row":2, "col":2},
            {"id":"ggSe3","name":"testSd","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/412/651/large/vlx-zvarun-study-8.jpg?1594394775","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/412/651/large/vlx-zvarun-study-8.jpg?1594394775", "row":2, "col":3},
            {"id":"ggSesw","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/028/345/662/large/vlx-zvarun-adam-ill.jpg?1594206355","imageUrl":"https://cdna.artstation.com/p/assets/images/images/028/345/662/large/vlx-zvarun-adam-ill.jpg?1594206355", "row":2, "col":3},
            {"id":"ggSewq","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/028/345/092/large/vlx-zvarun-acheron.jpg?1594204985","imageUrl":"https://cdna.artstation.com/p/assets/images/images/028/345/092/large/vlx-zvarun-acheron.jpg?1594204985", "row":1, "col":4},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/027/188/927/large/vlx-zvarun-study-3.jpg?1590838786","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/027/188/927/large/vlx-zvarun-study-3.jpg?1590838786", "row":2, "col":3},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893","imageUrl":"https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893", "row":2, "col":3},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589","imageUrl":"https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589", "row":2, "col":3},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/388/297/large/vlx-zvarun-study-2.jpg?1559178590","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/388/297/large/vlx-zvarun-study-2.jpg?1559178590", "row":2, "col":5},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/014/847/047/large/vlx-zvarun-study-10.jpg?1545874534","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/014/847/047/large/vlx-zvarun-study-10.jpg?1545874534", "row":4, "col":3},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/014/811/396/large/vlx-zvarun-study-7.jpg?1545641798","imageUrl":"https://cdna.artstation.com/p/assets/images/images/014/811/396/large/vlx-zvarun-study-7.jpg?1545641798", "row":1, "col":1},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935", "row":2, "col":3},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028", "row":2, "col":3},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/345/289/large/vlx-zvarun-adam-break.jpg?1594205477","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/345/289/large/vlx-zvarun-adam-break.jpg?1594205477", "row":2, "col":3},
            
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