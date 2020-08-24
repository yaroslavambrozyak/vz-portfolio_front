import React from 'react';
import Style from './WelcomeLogo.module.css';
import Logo from './preloadLogo.gif';

function WelcomeLogo(props) {

    let classes = `${Style.welcome_page} ${props.isFetching ? '': Style.welcome_page_dissapear}`

    return <div className={classes}>
        <img className={Style.welcome_page_logo} src={Logo} alt=''/>
    </div>

}

export default WelcomeLogo;