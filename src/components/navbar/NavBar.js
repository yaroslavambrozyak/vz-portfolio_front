import React, { useEffect, useState } from 'react';
import Style from './NavBar.module.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

function NavBar(props) {

    let sideNavigationCssClasses = `${Style.side_nav} 
    ${(window.innerWidth > 769 && props.logoPreloadFinished) ? Style.side_nav_width_animated : ''}`;

    let sideNavigationLogoCssClasses = `${Style.side_nav__logo} 
    ${props.navOpened ? Style.side_nav_extended__logo : ''}`;

    let scrollTopButtonStyle = { display: !props.navOpened ? 'block' : 'none' };

    let onScrollTopButtonClick = () => {
        window.scrollTo(0, 0)
    };

    return <div>
        <div className={sideNavigationCssClasses}>
            <Link to=''><img src={Logo} alt='logo' className={sideNavigationLogoCssClasses} /></Link>
            <div className={!props.navOpened ? Style.side_nav_button : Style.side_nav_button_transparent} onClick={props.changeNavBarOpenState} >
                <div className={Style.side_nav_button__text}>MENU</div>
                <div className={Style.side_nav_button__icon}>
                    <div></div>
                </div>
            </div>
            {window.innerWidth > '769px' &&
                <span style={scrollTopButtonStyle} className={Style.side_nav_scroll_top_button} onClick={onScrollTopButtonClick}></span>
            }
        </div>

    </div>
};

export default NavBar;