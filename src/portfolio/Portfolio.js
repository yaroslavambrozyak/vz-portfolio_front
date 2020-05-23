import React from 'react';
import style from './Portfolio.module.css';
import NavBar from './../navbar/NavBar'

class Portfolio extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className={style.main_container}>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'></img>
                    <img className={style.image} src='https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/018/388/297/large/vlx-zvarun-study-2.jpg?1559178590'></img>
                    <img className={style.image} src='https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/018/388/297/large/vlx-zvarun-study-2.jpg?1559178590'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'></img>
                    <img className={style.image} src='https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'></img>
                    <img className={style.image} src='https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'></img>
                    <img className={style.image} src='https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'></img>
                    <img className={style.image} src='https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/018/388/297/large/vlx-zvarun-study-2.jpg?1559178590'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'></img>
                    <img className={style.image} src='https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893'></img>
                    <img className={style.image} src='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'></img>


                </div>
            </div>
        );
    }

}

export default Portfolio;