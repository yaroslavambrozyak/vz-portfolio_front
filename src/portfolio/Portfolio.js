import React from 'react';
import style from './Portfolio.module.css';
import NavBar from './../navbar/NavBar'
import Art from './art/Art';

class Portfolio extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            preloadFinished: false,
            disabled: false
        };
    }

    componentDidMount() {
        this.preloadAnimationDisabler();
    };

    preloadAnimationDisabler() {
        setTimeout(() => this.setState({ preloadFinished: true }), 1500);
    }

    disableView(){
        setTimeout(()=>{
            this.setState(prevState => ({
                disabled: !prevState.disabled
            }));
        }, 425);
    }


    render() {
        return (
            <div>
                <NavBar onNavBarOpened={()=>this.disableView()} />
                <div className={style.main_container + ' ' + (
                    (window.innerWidth > 769 && !this.state.preloadFinished) ? style.main_container_preload_animation : '')+ ' ' +
                    (window.innerWidth >769 && this.state.disabled? style.main_container_disabled: '')}>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/019/215/045/large/vlx-zvarun-study-2.jpg?1562539028'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'
                    title='Hello bob' link='https://google.com'/>
                </div>
            </div>
        );
    }

}

export default Portfolio;