import React from 'react';
import Style from './NavBar.module.css';
import Logo from './logo.png';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state={
            navOpened:false
        }
    }

    openSideNav(){
        this.setState(prevState => ({
            navOpened: !prevState.navOpened
          }));
    }

    render() {
        return (
            <div>
                <div className={Style.side_nav}>
                    <img src={Logo} alt='logo' className={Style.logo} />
                    <div className={Style.nav_menu_button} onClick={()=>this.openSideNav()} ><span className={Style.nav_menu_button_text}>Menu</span>&#9776;</div>
                    <div className={Style.scroll_top_link} onClick={() => window.scrollTo(0, 0)}>top</div>
                </div>
                <div className={Style.side_nav_full + ' ' + (this.state.navOpened ? Style.side_nav_full_open: '')}>
                    
                        <NavLink className={Style.side_nav_full_link} to=''>Home</NavLink>
                        <NavLink className={Style.side_nav_full_link} to='/hello'>Hello</NavLink>
                    
                </div>
            </div>
        );
    }

}

export default NavBar;