import { connect } from 'react-redux'
import Home from './Home'
import { addCurrentPageCounter } from '../../redux/Reducers/homePageReducer'

const mapStateToProps = (state) => {
    return {
        currentPage: state.home.currentPage
    }
}

export default connect(mapStateToProps, {addCurrentPageCounter})(Home);