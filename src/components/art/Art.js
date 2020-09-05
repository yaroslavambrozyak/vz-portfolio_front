import React from 'react';
import style from './Art.module.css';
import { NavLink } from 'react-router-dom';
import ModalImg from './ModalImg';
import TransitionWrapper from '../common/transition/TransitionWrapper';

function Art(props) {

    let arts = props.art.images.map(i => <ModalImg imageUrl={i} />);

    return <div className={style.art}>
            <div>
                <div className={style.art_navigation + ' ' + style.art_navigation_left}>
                    <div className={style.art_navigation_left + ' ' + style.art_navigation_arrow}>
                        <NavLink className={style.art_navigation_text} to={props.prev}>Prev</NavLink>
                    </div>
                </div>
            </div>
            <div className={style.art_slider}>
                {arts}
            </div>
            <div>
                <div className={style.art_navigation}>
                    <div className={style.art_navigation_right + ' ' + style.art_navigation_arrow}>
                        <NavLink className={style.art_navigation_text} to={props.next}>Next</NavLink>
                    </div>
                </div>
                <div className={style.art_text}>
                    {props.art.description}
                </div>
            </div>

        </div>
}

export default Art;