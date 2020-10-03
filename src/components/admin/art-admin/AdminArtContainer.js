import React from 'react';
import { artsApi } from './../../../api/art-api';
import AdminArt from './AdminArt';
import { connect } from 'react-redux';


class AdminArtContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let cat = [{ id: 'dasgeW', name: 'hello' }];
        let proj = [{ id: 'tfg', name: 'ww' }];
        return <AdminArt onSubmit={e => artsApi.postArt({name:e.name},e.arts)} categories={cat} projects={proj} />
    }
}

let mapStateToProps = (state) => {
    return {
        arts: state.portfolio.arts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminArtContainer);