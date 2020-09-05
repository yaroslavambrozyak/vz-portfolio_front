import React, { useState, useEffect } from 'react';
import Style from './WelcomeLogo.module.css';
import Logo from './preloadLogo.gif';
import { connect } from 'react-redux';
import { logoHidden } from '../../redux/welcome-reducer';
import { AnimatePresence, motion } from 'framer-motion'

function WelcomeLogo(props) {

    let startedAt = useState(new Date().getMilliseconds())[0];

    const variants = {
        visible: { opacity: 1 },
        hidden: {
            opacity: 0,
            transitionEnd: {
                display: "none",
            }
        }
    }

    useEffect(() => {
        if (props.isFinished) {
            let finishedAt = new Date().getMilliseconds();
            let delay = finishedAt - startedAt < 2500 ? 2500 : 0;
            setTimeout(() => props.hideLogo(), delay);
        }
    }, [props.isFinished]);

    return <motion.div animate={props.isLogoHidden ? 'hidden' : 'visible'}
        variants={variants}
        transition={{ duration: .5 }}
        className={Style.welcome_page}

    >
        <img className={Style.welcome_page_logo} src={Logo} alt='' />
    </motion.div>

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