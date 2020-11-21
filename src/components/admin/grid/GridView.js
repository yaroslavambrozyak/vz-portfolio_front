import React from 'react';
import style from './GridView.module.css'

function GridView(props) {

    return (
        <div>
            {props.arts && props.arts.map(a=><img className={style.sortable_art} onClick={()=>props.onArtClick(a)} src={a.imageUrl}/>)}
        </div>
    )
}

export default GridView;