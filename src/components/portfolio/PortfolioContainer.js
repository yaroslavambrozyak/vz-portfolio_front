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
            {"id":"qweDFV","name":"bob","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/029/955/871/large/vlx-zvarun-study15.jpg?1599143882","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/029/955/871/large/vlx-zvarun-study15.jpg?1599143882"},
            {"id":"qqwe1","name":"test","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/028/866/934/large/vlx-zvarun-limbo.jpg?1595770057","imageUrl":"https://cdna.artstation.com/p/assets/images/images/028/866/934/large/vlx-zvarun-limbo.jpg?1595770057"},
            {"id":"ggSew","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/673/667/large/vlx-zvarun-dante-break-solo.jpg?1595176133","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/673/667/large/vlx-zvarun-dante-break-solo.jpg?1595176133"},
            {"id":"ggSe3","name":"testSd","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/412/651/large/vlx-zvarun-study-8.jpg?1594394775","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/412/651/large/vlx-zvarun-study-8.jpg?1594394775"},
            {"id":"ggSesw","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/028/345/662/large/vlx-zvarun-adam-ill.jpg?1594206355","imageUrl":"https://cdna.artstation.com/p/assets/images/images/028/345/662/large/vlx-zvarun-adam-ill.jpg?1594206355"},
            {"id":"ggSewq","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/028/345/092/large/vlx-zvarun-acheron.jpg?1594204985","imageUrl":"https://cdna.artstation.com/p/assets/images/images/028/345/092/large/vlx-zvarun-acheron.jpg?1594204985"},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/027/188/927/large/vlx-zvarun-study-3.jpg?1590838786","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/027/188/927/large/vlx-zvarun-study-3.jpg?1590838786"},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893","imageUrl":"https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893"},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589","imageUrl":"https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589"},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/388/297/large/vlx-zvarun-study-2.jpg?1559178590","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/388/297/large/vlx-zvarun-study-2.jpg?1559178590"},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/014/847/047/large/vlx-zvarun-study-10.jpg?1545874534","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/014/847/047/large/vlx-zvarun-study-10.jpg?1545874534"},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdna.artstation.com/p/assets/images/images/014/811/396/large/vlx-zvarun-study-7.jpg?1545641798","imageUrl":"https://cdna.artstation.com/p/assets/images/images/014/811/396/large/vlx-zvarun-study-7.jpg?1545641798"},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935"},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028"},
            {"id":"ggSewws","name":"testqwe","smallImageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/345/289/large/vlx-zvarun-adam-break.jpg?1594205477","imageUrl":"https://cdnb.artstation.com/p/assets/images/images/028/345/289/large/vlx-zvarun-adam-break.jpg?1594205477"},
            
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