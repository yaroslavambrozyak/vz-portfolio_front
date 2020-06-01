import React from 'react';
import Style from './NavBar.module.css';
import Logo from './logo.png';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navOpened: false,
            preloadFinished: false,
            windowWidth: window.innerWidth
        }
    }

    componentDidMount(){
        this.sideNavAnimationDisabler();
    }

    openSideNav = () => {
        this.setState(prevState => ({
            navOpened: !prevState.navOpened
        }));
    };

    scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    sideNavAnimationDisabler = () => {
        setTimeout(()=> this.setState({preloadFinished: true}), 1500);
    }

    render() {
        return (
            <div>
                <div className={Style.side_nav + ' ' + ((this.state.innerWidth > 769 &&!this.state.preloadFinished) ? Style.side_nav_animated : '')}>
                    <img src={Logo} alt='logo' className={Style.side_nav__logo} />
                    <div className={Style.side_nav_button} onClick={this.openSideNav} >
                        <span className={Style.side_nav_button__text}>Menu</span>
                        <span className={Style.side_nav_button__icon}>&#9776;</span>
                    </div>
                    <span className={Style.side_nav_scroll_top_button} onClick={this.scrollToTop}></span>
                </div>
                <div className={Style.side_nav_extended + ' ' + (this.state.navOpened ? Style.side_nav_extended_opened : '')}>

                    <NavLink className={Style.side_nav_extended__nav_link} to=''>Home</NavLink>
                    <NavLink className={Style.side_nav_extended__nav_link} to='/hello'>Hello</NavLink>

                </div>
            </div>
        );
    }

}

export default NavBar;