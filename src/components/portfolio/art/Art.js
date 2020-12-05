import React from 'react';
import style from './Art.module.css';
import { NavLink } from 'react-router-dom';

function Art(props) {

    
    return <div className={`${style.image_container}`} style={{gridColumn:`span ${props.col}`, gridRow: `span ${props.row}`}} >
        <img className={style.image} src={props.imageUrl}/>
        <div className={style.image_overlay}>
            <div className={style.image_title}>{props.name}</div>
            <NavLink className={style.image_link} to={props.link}><span className={style.image_link_text}>VIEW</span></NavLink>
        </div>
    </div>

}

export default Art;