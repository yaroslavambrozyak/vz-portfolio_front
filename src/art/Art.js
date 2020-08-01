import React from 'react';
import style from './Art.module.css';
import NavBar from '../navbar/NavBar.js'

function Art(props) {

    return <div> 
        <NavBar preloadAnimationEnabled={false}/>
        <div className={style.art}>
            <div className={style.art_navigation + ' ' + style.art_navigation_left}>
                <div className={style.art_navigation_left + ' ' + style.art_navigation_arrow}>
                    <span>Prev</span>
                </div>
            </div>
            <div className={style.art_slider}>
                <img className={style.art_image} src='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'></img>
                <img className={style.art_image} src='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'></img>
                <img className={style.art_image} src='https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589'></img>
            </div>
            <div>
                <div className={style.art_navigation}>
                    <div className={style.art_navigation_right + ' ' + style.art_navigation_arrow}>
                        <span>Next</span>
                    </div>
                </div>
                <div className={style.art_text}>
                    HEllo centrym centra HEllo centrym centra HEllo centrym centra HEllo centrym centra
                    HEllo centrym centra HEllo centrym centra HEllo centrym centra HEllo centrym centra
                    HEllo centrym centra HEllo centrym centra HEllo centrym centra HEllo centrym centra
                </div>
            </div>

        </div>
    </div>

}

export default Art;