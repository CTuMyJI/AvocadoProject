import React from 'react'
import { Navbar } from './Navbar'
import { connect } from 'react-redux'
import { getAuthUserData } from '../redux/Reducers/authReducer'
import {compose} from 'redux'

class NavbarContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    
    render() {
        return <Navbar {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose(
    connect(mapStateToProps, {getAuthUserData})
)(NavbarContainer);