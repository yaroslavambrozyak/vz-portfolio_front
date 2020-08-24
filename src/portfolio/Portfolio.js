import React from 'react';
import style from './Portfolio.module.css';
import Art from './art/Art';

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            preloadFinished: false,
            disabled: false
        };
        this.styleDisplayNone = {
            display: 'none'
        };
        this.styleDisplayBlock = {
            display: 'block'
        };
    }

    componentDidMount() {
        //this.preloadAnimationDisabler();

        //fetch axios
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

    };

    preloadAnimationDisabler() {
        setTimeout(() => this.setState({ preloadFinished: true }), 1500);
    }

    disableView() {
        setTimeout(() => {
            this.setState(prevState => ({
                disabled: !prevState.disabled
            }));
        }, 425);
    }

    render() {
        return (
            <div>
                <div style={this.state.disabled ? this.styleDisplayBlock : this.styleDisplayNone} className={style.transparent_container}></div>
                <div className={style.main_container + ' ' + (
                    (window.innerWidth > 769 && !this.state.preloadFinished) ? style.main_container_preload_animation : '') + ' ' +
                    (window.innerWidth > 769 && this.state.disabled ? style.main_container_disabled : '')}>
                    {this.props.arts.map(a => <Art imageUrl={a.imageUrl} title={a.title} link={`/art/${a.link}`} />)}
                </div>
            </div>
        );
    }

}

export default Portfolio;