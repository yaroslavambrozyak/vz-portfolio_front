import React from 'react';
import style from './Portfolio.module.css';
import NavBar from './../navbar/NavBar'
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
        this.arts = props.arts.map(a => <Art imageUrl={a.imageUrl} title={a.title} link={`/art/${a.link}`} />);
    }

    componentDidMount() {
        this.preloadAnimationDisabler();
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
                <NavBar onNavBarOpened={() => this.disableView()}/>
                <div style={this.state.disabled ? this.styleDisplayBlock : this.styleDisplayNone} className={style.transparent_container}></div>
                <div className={style.main_container + ' ' + (
                    (window.innerWidth > 769 && !this.state.preloadFinished) ? style.main_container_preload_animation : '') + ' ' +
                    (window.innerWidth > 769 && this.state.disabled ? style.main_container_disabled : '')}>
                    {this.arts}
                </div>
            </div>
        );
    }

}

export default Portfolio;