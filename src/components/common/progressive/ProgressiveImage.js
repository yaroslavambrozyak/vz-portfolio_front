import React, { useState } from "react";
import style from './ProgressiveImage.module.css'

function ProgressiveImage(props) {

    let [highResImgLoaded, setHighResImgLoaded] = useState(false);

    return <span>
        <img src={props.smallResImage} className={`${style.image} ${style.image_overlay}`} style={highResImgLoaded ? { opacity: "0" } : {}}></img>
        <img src={props.highResImage} className={style.image} onLoad={() => setHighResImgLoaded(true)}></img>
    </span>


}

export default ProgressiveImage;