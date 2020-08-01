import React, { useEffect } from 'react';
import Style from './WelcomeLogo.module.css';
import Logo from './preloadLogo.gif';

function WelcomeLogo(props) {

    useEffect(()=>{
        setDisapearTimer();
    });

    const setDisapearTimer = ()=>{
      setTimeout(()=>{
          props.history.push('/portfolio');
      },2500)  
    };

    return <div className={Style.welcome_page}>
        <img className={Style.welcome_page_logo} src={Logo} alt=''/>
    </div>

}

export default WelcomeLogo;