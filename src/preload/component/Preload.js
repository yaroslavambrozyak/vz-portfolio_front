import React from 'react';
import Style from './Preload.module.css'
import PreloadLogo from './load.gif';


class Preload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hide: false
        }
    }

    hideLogo = () => {
        this.setState({ hide: true });
    }

    render() {
        return (
            <div className={Style.background + ' ' + (this.state.hide ? Style.fade_out_animation : '')}>
                <img src={PreloadLogo} alt='logo' className={Style.preload_logo} />
            </div>
        )
    }

}

export default Preload;