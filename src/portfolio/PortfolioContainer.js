import Portfolio from './Portfolio';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        arts: state.portfolio.arts
    }
}

let mapDispatchToProps = (dispatch) => {

}

const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(Portfolio);

export default PortfolioContainer;