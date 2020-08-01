import React from 'react';
import Style from './WelcomeLogo.module.css';
import Logo from './preloadLogo.gif';

function WelcomeLogo(props) {

    return <div className={Style.welcome_page}>
        <img className={Style.welcome_page_logo} src={Logo} alt=''/>
    </div>

}

export default WelcomeLogo;