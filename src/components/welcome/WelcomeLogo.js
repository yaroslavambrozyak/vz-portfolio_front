import React, { useState, useEffect } from 'react';
import Style from './WelcomeLogo.module.css';
import Logo from './preloadLogo.gif';
import { connect } from 'react-redux';

function WelcomeLogo(props) {

    let [preloadFinished, setPreloadFinished] = useState(false);
    let startedAt = useState(new Date().getMilliseconds())[0];

    useEffect(() => {
        let finishedAt = new Date().getMilliseconds();
        let delay = finishedAt - startedAt < 2500 ? 2500 : 0;
        setTimeout(() => {
            setPreloadFinished(true);
        }, delay);
    }, [props.isFinished]);

    let classes = `${Style.welcome_page} ${preloadFinished ? Style.welcome_page_dissapear : ''}`

    return <div className={classes}>
        <img className={Style.welcome_page_logo} src={Logo} alt='' />
    </div>

}

let mapStateToProps = (state) => {
    return {
        isFinished: state.welcomePage.preloadFinished
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(WelcomeLogo);