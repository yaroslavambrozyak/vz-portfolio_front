import React from 'react';
import Art from './Art';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getArt, getPrevArt, getNextArt } from './../../redux/art-reducer'

class ArtContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let artId = this.props.match.params.id;
        this.props.getArt(artId);
        this.props.getNextArt(artId);
        this.props.getPrevArt(artId);
    }

    mapNavigationArtObject(navArt) {
        return navArt ? { ...navArt, url: `/art/${navArt.id}` } : null;
    }

    render() {
        return <Art images={this.props.art.images} prev={this.mapNavigationArtObject(this.props.prev)}
            next={this.mapNavigationArtObject(this.props.next)}
            description={this.props.art.description} />
    }

}

let mapStateToProps = (state) => {
    return {
        art: state.art.art,
        prev: state.art.prev,
        next: state.art.next
    }
};


export default withRouter(connect(mapStateToProps, { getArt, getNextArt, getPrevArt })(ArtContainer));