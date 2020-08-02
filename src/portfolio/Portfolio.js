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
        this.styleDisplayNone={
            display:'none'
        };
        this.styleDisplayBlock={
            display:'block'
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
                <NavBar onNavBarOpened={()=>this.disableView()} preloadAnimationEnabled={true} />
                <div style={this.state.disabled? this.styleDisplayBlock : this.styleDisplayNone} className={style.transparent_container}></div>
                <div className={style.main_container + ' ' + (
                    (window.innerWidth > 769 && !this.state.preloadFinished) ? style.main_container_preload_animation : '')+ ' ' +
                    (window.innerWidth >769 && this.state.disabled? style.main_container_disabled: '')}>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/028/673/667/large/vlx-zvarun-dante-break-solo.jpg?1595176133'
                    title='Hello bob' link='/art'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/028/412/651/large/vlx-zvarun-study-8.jpg?1594394775'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/028/345/662/large/vlx-zvarun-adam-ill.jpg?1594206355'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/028/345/289/large/vlx-zvarun-adam-break.jpg?1594205477'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/028/345/092/large/vlx-zvarun-acheron.jpg?1594204985'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/028/343/497/large/vlx-zvarun-gate.jpg?1594201119'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/028/153/664/large/vlx-zvarun-feel.jpg?1593629161'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/027/378/162/large/vlx-zvarun-escape-02.jpg?1591361390'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/027/188/927/large/vlx-zvarun-study-3.jpg?1590838786'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/025/862/607/large/vlx-zvarun-study1.jpg?1587154488'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/019/193/162/large/vlx-zvarun-study-1.jpg?1562429893'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/018/388/297/large/vlx-zvarun-study-2.jpg?1559178590'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/018/622/041/large/vlx-zvarun-study-5s.jpg?1560092935'
                    title='Hello bob' link='https://google.com'/>
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/018/762/520/large/vlx-zvarun-study-6s.jpg?1560620589'
                    title='Hello bob' link='https://google.com'/>
                       <Art imageUrl='https://cdnb.artstation.com/p/assets/images/images/014/847/047/large/vlx-zvarun-study-10.jpg?1545874534'
                    title='Hello bob' link='https://google.com'/>
                
                    <Art imageUrl='https://cdna.artstation.com/p/assets/images/images/014/811/396/large/vlx-zvarun-study-7.jpg?1545641798'
                    title='Hello bob' link='https://google.com'/>
                </div>
            </div>
        );
    }

}

export default Portfolio;