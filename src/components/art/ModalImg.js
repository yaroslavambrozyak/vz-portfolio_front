import React, { useState } from 'react';
import style from './Art.module.css';


function ModalImg(props) {

    let [modalOpened, setModalOpened] = useState(false);

    let onModalOpenEvent = () => {
        setModalOpened(!modalOpened);
    };

    return (
        <div>
            <img onClick={onModalOpenEvent} className={style.art_image} src={props.imageUrl}></img>
            {modalOpened &&
                <div className={style.art_image_modal}>
                    <span onClick={onModalOpenEvent} className={style.art_image_modal_close_btn}>&times;</span>
                    <img className={style.art_image_modal_img} src={props.imageUrl}></img>
                </div>
            }
        </div>
    )

}

export default ModalImg;