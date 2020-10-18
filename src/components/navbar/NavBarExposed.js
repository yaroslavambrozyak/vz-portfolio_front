import React from 'react';
import Style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MailIcon } from './mail_icon.svg'
import { ReactComponent as FaceBookIcon } from './facebook_icon.svg'
import { ReactComponent as InstagramIcon } from './instagram_icon.svg'
import { ReactComponent as ArtStationIcon } from './artstation_icon.svg'

function NavBarExposed(props) {

    let categories = props.categories
    .map(c=> <NavLink onClick={props.changeNavBarOpenState} 
    className={Style.side_nav_extended_nav__link} to={`/categories/${c.name}`}>{c.name.toUpperCase()}</NavLink> )

    let sideNavExtendedCssClasses = `${Style.side_nav_extended} ${props.navOpened ? Style.side_nav_extended_opened : ''}`;
    
    let sideNavExtendedContentContainerCssClasses = `${Style.side_nav_extended_content_wrapper} 
    ${props.navOpened ? Style.side_nav_extended_fade_in_animated : Style.side_nav_extended_fade_out_animated}`;

    return <div className={sideNavExtendedCssClasses}>
        <div className={sideNavExtendedContentContainerCssClasses}>
            <span className={Style.side_nav_extended_close_button} onClick={props.changeNavBarOpenState}>&times;</span>
            <div className={Style.side_nav_extended__logo}>VLAD ZVARUN</div>
            <div className={Style.side_nav_extended_nav}>
                {categories}
            </div>
            <div className={Style.side_nav_extended_social_icons}>
                <a className={Style.side_nav_extended_social_icons__icon} href='mailto:vladzvarun@icloud.com'><MailIcon /></a>
                <a className={Style.side_nav_extended_social_icons__icon} href='https://www.facebook.com/profile.php?id=100007529322700'><FaceBookIcon /></a>
                <a className={Style.side_nav_extended_social_icons__icon} href='https://www.instagram.com/zvarunchik/'><InstagramIcon /></a>
                <a className={Style.side_nav_extended_social_icons__icon} href='https://www.artstation.com/vladzvarun'><ArtStationIcon /></a>
            </div>
        </div>
    </div>
}

export default NavBarExposed;