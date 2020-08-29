import React, { useState, useEffect } from 'react';
import Style from './WelcomeLogo.module.css';
import Logo from './preloadLogo.gif';
import { connect } from 'react-redux';
import { logoHidden } from '../../redux/welcome-reducer';

function WelcomeLogo(props) {

    let startedAt = useState(new Date().getMilliseconds())[0];

    useEffect(() => {
        if (props.isFinished) {
            let finishedAt = new Date().getMilliseconds();
            let delay = finishedAt - startedAt < 2500 ? 2500 : 0;
            setTimeout(() => props.hideLogo(), delay);
        }
    }, [props.isFinished]);

    let classes = `${Style.welcome_page} ${props.isLogoHidden ? Style.welcome_page_dissapear : ''}`

    return <div className={classes}>
        <img className={Style.welcome_page_logo} src={Logo} alt='' />
    </div>

}

let mapStateToProps = (state) => {
    return {
        isFinished: state.welcomePage.preloadFinished,
        isLogoHidden: state.welcomePage.preloadLogoHidden
    }
}

let mapDispatchToProps = (dispatch) => {
    return { hideLogo: () => dispatch(logoHidden()) }
}


export default connect(mapStateToProps, mapDispatchToProps)(WelcomeLogo);