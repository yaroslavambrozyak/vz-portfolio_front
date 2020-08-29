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
                    {this.props.arts.map(a => <Art imageUrl={a.imageUrl} smallImageUrl={a.smallImageUrl} name={a.name} link={`/art/${a.link}`} />)}
                </div>
            </div>
        );
    }

}

export default Portfolio;