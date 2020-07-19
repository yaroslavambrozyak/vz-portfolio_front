import React from 'react';
import style from './Art.module.css';

function Art(props) {

    return <div className={style.art}>
        <div className={style.art_slider}>
            <img className={style.art_image} src='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'></img>
            <img className={style.art_image} src='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'></img>
            <img className={style.art_image} src='https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589'></img>
        </div>
        <div className={style.art_description}>
            hello text any bobobobo
        </div>
    </div>

}

export default Art;