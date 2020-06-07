import React from 'react';
import Style from './NavBar.module.css';
import Logo from './logo.png';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MailIcon } from './mail_icon.svg'
import { ReactComponent as FaceBookIcon } from './facebook_icon.svg'
import { ReactComponent as InstagramIcon } from './instagram_icon.svg'
import { ReactComponent as ArtStationIcon } from './artstation_icon.svg'


class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navOpened: false,
            preloadFinished: false,
            windowWidth: window.innerWidth
        }
    }

    componentDidMount() {
        this.sideNavAnimationDisabler();
    }

    openSideNav = () => {
        this.setState(prevState => ({
            navOpened: !prevState.navOpened
        }));
        this.props.onNavBarOpened();
    };

    scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    sideNavAnimationDisabler = () => {
        setTimeout(() => this.setState({ preloadFinished: true }), 1500);
    }

    render() {

        return (
            <div>
                <div className={Style.side_nav + ' ' +
                    ((this.state.windowWidth > 769 && !this.state.preloadFinished) ? Style.side_nav_animated : '')}>
                    <img src={Logo} alt='logo' className={Style.side_nav__logo} />
                    <div className={Style.side_nav_button} onClick={this.openSideNav} >
                        <span className={Style.side_nav_button__text}>Menu</span>
                        <span className={Style.side_nav_button__icon}>&#9776;</span>
                    </div>
                    <span className={Style.side_nav_scroll_top_button} onClick={this.scrollToTop}></span>
                </div>
                <div className={Style.side_nav_extended + ' ' + (this.state.navOpened ? Style.side_nav_extended_opened : '')}>
                    <div className={Style.side_nav_extended_content_wrapper + ' ' +
                        (this.state.navOpened ? Style.side_nav_extended_fade_in_animated : Style.side_nav_extended_fade_out_animated)}>
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
        );
    }

}

export default NavBar;