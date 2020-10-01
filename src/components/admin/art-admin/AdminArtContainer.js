import React from 'react';

class AdminArtContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let cat = [{id:'dasgeW', name:'hello'}];
        let proj = [{id:'tfg', name:'ww'}];
        <AdminArtContainer onSubmit={e=>console.log(e)} categories={cat} projects={proj}/>
    }
}

let mapStateToProps = (state) => {
    return {
        arts: state.portfolio.arts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPortfolioArts: (arts) => dispatch(setPortfolioArtsAC(arts)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminArtContainer);