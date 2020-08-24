import React from 'react';
import style from './Art.module.css';
import { NavLink } from 'react-router-dom';

function Art(props) {

    return <div className={style.image_container}>
        <img className={style.image} src={props.imageUrl}></img>
        <div className={style.image_overlay}>
            <div className={style.image_title}>{props.title}</div>
            <NavLink className={style.image_link} to={props.link}>VIEW</NavLink>
        </div>
    </div>

}

export default Art;