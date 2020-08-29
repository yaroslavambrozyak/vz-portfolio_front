import React from 'react';
import style from './Art.module.css';
import { NavLink } from 'react-router-dom';
import ProgressiveImage from '../../common/progressive/ProgressiveImage';

function Art(props) {

    return <div className={style.image_container}>
        <ProgressiveImage smallResImage={props.smallImageUrl} highResImage={props.imageUrl}/>
        <div className={style.image_overlay}>
            <div className={style.image_title}>{props.name}</div>
            <NavLink className={style.image_link} to={props.link}>VIEW</NavLink>
        </div>
    </div>

}

export default Art;