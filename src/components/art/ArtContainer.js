import React from 'react';
import Art from './Art';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getArt } from './../../redux/art-reducer'

class ArtContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let artId = this.props.match.params.id;
        this.props.getArt(artId);
    }

    mapNavigationArtObject(navArt) {
        return {
            ...navArt,
            //url: `/art/${navArt.id}`
            url:'/art'
        }
    }

    render() {
        return <Art images={this.props.art.images} prev={this.mapNavigationArtObject(this.props.art.prev)}
            next={this.mapNavigationArtObject(this.props.art.next)}
            description={this.props.art.description} />
    }

}

let mapStateToProps = (state) => {
    return {
        art: state.art.art
    }
};


export default withRouter(connect(mapStateToProps, { getArt })(ArtContainer));