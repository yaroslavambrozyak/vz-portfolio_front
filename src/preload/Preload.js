import React from 'react';
import style from './Preload.module.css'
import PreloadLogo from './load.gif';
import { NavLink } from 'react-router-dom';


class Preload extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //this.startTimer();
    }

    startTimer() {
        setTimeout(()=>{
            console.log('re');
            console.log(this.props);
            this.props.history.push("/portfolio");
        }, 2500);
    }

    render() {
        return (
            <div className={style.background}>
                <img src={PreloadLogo} alt='logo' className={style.preload_logo} />
                <NavLink to='/portfolio'>hello</NavLink>
            </div>
        )
    }

}

export default Preload;