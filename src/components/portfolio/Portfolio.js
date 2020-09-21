import React from 'react';
import style from './Portfolio.module.css';
import Art from './art/Art';

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.styleDisplayNone = {
            display: 'none'
        };
        this.styleDisplayBlock = {
            display: 'block'
        };
    }

    render() {
        return (
            <div>
                <div style={this.props.isNavBarOpened ? this.styleDisplayBlock : this.styleDisplayNone} className={style.transparent_container}></div>
                <div className={style.main_container + ' ' + (
                    (window.innerWidth > 769 && this.props.preloadLogoHidden) ? style.main_container_padding_animated : '') + ' ' +
                    (window.innerWidth > 769 && this.props.isNavBarOpened ? style.main_container_disabled : '')}>
                    {this.props.arts.map(a => <Art
                        imageUrl={a.imageUrl}
                        smallImageUrl={a.smallImageUrl}
                        name={a.name}
                        link={`/art/${a.link}`}
                        row={a.row}
                        col={a.col}
                    />)}
                </div>
            </div>
        );
    }

}

export default Portfolio;