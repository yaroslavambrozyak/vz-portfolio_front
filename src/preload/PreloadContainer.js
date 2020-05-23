import React from 'react';
import Preload from './component/Preload';
import Portfolio from './../portfolio/Portfolio';

class PreloadContainer extends React.Component {

    constructor(props) {
        super(props);
        this.preloadLogoRef = React.createRef();
    }

    componentDidMount(){
        this.startLogoTimeOut()
    }

    startLogoTimeOut = () => {

        setTimeout(() => {
            this.preloadLogoRef.current.hideLogo();
        }, 2500);
    }


    render() {
        return (
            <div >
                <Preload ref={this.preloadLogoRef} />
                <Portfolio />
            </div>
        )
    }

}

export default PreloadContainer;