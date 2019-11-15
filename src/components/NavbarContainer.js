import React from 'react'
import { Navbar } from './Navbar'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {logout} from '../redux/Reducers/authReducer'

class NavbarContainer extends React.Component {
    
    render() {
        return <Navbar {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose(
    connect(mapStateToProps, {logout})
)(NavbarContainer);