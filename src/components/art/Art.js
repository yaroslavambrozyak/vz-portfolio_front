import React from 'react';
import style from './Art.module.css';
import { NavLink } from 'react-router-dom';
import ModalImg from './ModalImg';

function Art(props) {

    let arts = props.images.map(i => <ModalImg imageUrl={i.highResolutionImg} />);

    return <div className={style.art}>
        <div>
            <div className={style.art_navigation + ' ' + style.art_navigation_left}>
                {props.prev &&
                    <div className={style.art_navigation_left + ' ' + style.art_navigation_arrow}>
                        <NavLink className={style.art_navigation_text} to={props.prev.url}>Prev</NavLink>
                    </div>
                }
            </div>
        </div>
        <div className={style.art_slider}>
            {arts}
        </div>
        <div>
            <div className={style.art_navigation}>
                {props.next &&
                    <div className={style.art_navigation_right + ' ' + style.art_navigation_arrow}>
                        <NavLink className={style.art_navigation_text} to={props.next.url}>Next</NavLink>
                    </div>
                }
            </div>
            <div>
                <div className={style.art_name}>{props.name}</div>
                <div className={style.art_text}>
                    {props.description}
                </div>
            </div>
        </div>

    </div>
}

export default Art;