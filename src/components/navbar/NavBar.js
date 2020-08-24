import React, { useEffect, useState } from 'react';
import Style from './NavBar.module.css';
import Logo from './logo.png';
import NavBarExposed from './NavBarExposed';
import { Link } from 'react-router-dom';

function NavBar(props) {

    let [transitionAnimationFinished, setTransitionAnimationFisished] = useState(false);
    let [navOpened, setNavOpened] = useState(false);

    let sideNavigationCssClasses = `${Style.side_nav} 
    ${(window.innerWidth > 769 && !transitionAnimationFinished) ? Style.side_nav_animated : ''}`;

    let sideNavigationLogoCssClasses = `${Style.side_nav__logo} 
    ${navOpened ? Style.side_nav_extended__logo : ''}`;

    let scrollTopButtonStyle = {display: !navOpened ? 'block' : 'none'};

    useEffect(() => {
        navAppearAnimationConfigurator();
    }, []);

    let navAppearAnimationConfigurator = () => {
        setTimeout(() => { setTransitionAnimationFisished(true) }, 1500);
    };

    let exposeNavigation = () => {
        setNavOpened(!navOpened);
        if (props.onNavBarOpened !== undefined) {
            props.onNavBarOpened();
        }
    };

    let onScrollTopButtonClick = () => {
        window.scrollTo(0, 0)
    };

    return <div>
        <div className={sideNavigationCssClasses}>
            <Link to=''><img src={Logo} alt='logo' className={sideNavigationLogoCssClasses} /></Link>
            <div className={Style.side_nav_button} onClick={exposeNavigation} >
                <span className={Style.side_nav_button__text}>Menu</span>
                <span className={Style.side_nav_button__icon}>&#9776;</span>
            </div>
            <span style={scrollTopButtonStyle} className={Style.side_nav_scroll_top_button} onClick={onScrollTopButtonClick}></span>
        </div>
        <NavBarExposed exposeNavigation={exposeNavigation} navOpened={navOpened}/>
    </div>
};

export default NavBar;