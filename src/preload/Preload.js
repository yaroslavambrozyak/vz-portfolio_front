import React from 'react';
import style from './Preload.module.css'
import PreloadLogo from './load.gif';


class Preload extends React.Component {



    startTimer() {
        setTimeout(() => {
            console.log('event');
            this.setState({ visible: false });
        }, 2500);
    }

    render() {
        return (
            <div className={style.background}>
                <img src={PreloadLogo} alt='logo' className={style.preload_logo} />
            </div>
        )
    }

}

export default Preload;