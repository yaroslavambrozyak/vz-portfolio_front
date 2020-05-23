import React from 'react';
import Style from './NavBar.module.css';
import Logo from './logo.png';

class NavBar extends React.Component {


    render() {
        return (
            <div className={Style.side_nav}>
                <img src={Logo} alt='logo' className={Style.logo}/>
                <div className={Style.nav_menu_button}>Menu</div>
                <div className={Style.scroll_top_link} onClick={()=>window.scrollTo(0,0)}>top</div>
            </div>
        );
    }

}

export default NavBar;