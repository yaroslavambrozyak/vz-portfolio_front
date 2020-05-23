import React from 'react';
import Preload from './component/Preload';
import Portfolio from './../portfolio/Portfolio';

class PreloadContainer extends React.Component {

    constructor(props) {
        super(props);
        this.preloadLogoRef = React.createRef();
        this.state = {
            style: {
                overflowY: 'hidden',
                height: 0
            }
        }
    }

    componentDidMount() {
        this.startLogoTimeOut()
    }

    startLogoTimeOut = () => {

        setTimeout(() => {
            this.setState({
                style: {
                    overflowY: 'vissible',
                    height: 'auto'
                }    
            });
            this.preloadLogoRef.current.hideLogo();
        }, 2500);
    }


    render() {
        return (
            <div style={this.state.style} >
                <Preload ref={this.preloadLogoRef} />
                <Portfolio />
            </div>
        )
    }

}

export default PreloadContainer;