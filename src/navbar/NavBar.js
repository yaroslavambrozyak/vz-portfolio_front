import React, { useEffect, useState } from 'react';
import Style from './NavBar.module.css';
import Logo from './logo.png';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MailIcon } from './mail_icon.svg'
import { ReactComponent as FaceBookIcon } from './facebook_icon.svg'
import { ReactComponent as InstagramIcon } from './instagram_icon.svg'
import { ReactComponent as ArtStationIcon } from './artstation_icon.svg'

function NavBar(props) {

    let [transitionAnimationFinished, setTransitionAnimationFisished] = useState(false);
    let [navOpened, setNavOpened] = useState(false);

    let sideNavigationCssClasses = `${Style.side_nav} 
    ${(window.innerWidth > 769 && !transitionAnimationFinished) ? Style.side_nav_animated : ''}`;

    let sideNavigationLogoCssClasses = `${Style.side_nav__logo} 
    ${navOpened ? Style.side_nav_extended__logo : ''}`;

    let sideNavExtendedCssClasses = `${Style.side_nav_extended} ${navOpened ? Style.side_nav_extended_opened : ''}`;

    let sideNavExtendedContentContainerCssClasses = `${Style.side_nav_extended_content_wrapper} 
    ${navOpened ? Style.side_nav_extended_fade_in_animated : Style.side_nav_extended_fade_out_animated}`;

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
            <img src={Logo} alt='logo' className={sideNavigationLogoCssClasses} />
            <div className={Style.side_nav_button} onClick={exposeNavigation} >
                <span className={Style.side_nav_button__text}>Menu</span>
                <span className={Style.side_nav_button__icon}>&#9776;</span>
            </div>
            <span className={Style.side_nav_scroll_top_button} onClick={onScrollTopButtonClick}></span>
        </div>
        <div className={sideNavExtendedCssClasses}>
            <div className={sideNavExtendedContentContainerCssClasses}>
                <span className={Style.side_nav_extended_close_button} onClick={exposeNavigation}>&times;</span>
                <div className={Style.side_nav_extended__logo}>VLAD ZVARUN</div>
                <div className={Style.side_nav_extended_nav}>
                    <NavLink className={Style.side_nav_extended_nav__link} to=''>PORTFOLIO</NavLink>
                    <NavLink className={Style.side_nav_extended_nav__link} to='/hello'>GRAPHIC DESIGN</NavLink>
                    <NavLink className={Style.side_nav_extended_nav__link} to='/hello'>OTHER</NavLink>
                    <NavLink className={Style.side_nav_extended_nav__link} to='/hello'>RESUME</NavLink>
                </div>
                <div className={Style.side_nav_extended_social_icons}>
                    <a className={Style.side_nav_extended_social_icons__icon} href='mailto:vladzvarun@icloud.com'><MailIcon /></a>
                    <a className={Style.side_nav_extended_social_icons__icon} href='https://www.facebook.com/profile.php?id=100007529322700'><FaceBookIcon /></a>
                    <a className={Style.side_nav_extended_social_icons__icon} href='https://www.instagram.com/zvarunchik/'><InstagramIcon /></a>
                    <a className={Style.side_nav_extended_social_icons__icon} href='https://www.artstation.com/vladzvarun'><ArtStationIcon /></a>
                </div>
            </div>
        </div>
    </div>
};

export default NavBar;