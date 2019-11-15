import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Services } from './pages/Services/Services'
import { Partners } from './pages/Partners/Partners'
import OnconsultContainer from './pages/Onconsult/OnconsultContainer'
import AboutContainer from './pages/About/AboutContainer'
import UsersContainer from './pages/Users/UsersContainer'
import ProfileAContainer from './pages/Partners/A/ProfileAContainer'
import ProfileNContainer from './pages/Partners/N/ProfileNContainer'
import ProfileContainer from './pages/Profile/ProfileContainer'
import NavbarContainer from './components/NavbarContainer'
import Login from './pages/Login/Login'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/Reducers/appReducer'
import Preloader from './components/common/Preloader'

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div>
        <NavbarContainer />
        <div className="container pt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about"
              render={() => <AboutContainer />} />
            <Route path="/services" component={Services} />
            <Route path="/onconsult"
              render={() => <OnconsultContainer />} />
            <Route path="/profile/:userId?"
              render={() => <ProfileContainer />} />
            <Route path="/partners"
              render={() => <Partners />} />
            <Route path="/users"
              render={() => <UsersContainer />} />
            <Route path="/profilen"
              render={() => <ProfileNContainer />} />
            <Route path="/profilea"
              render={() => <ProfileAContainer />} />
            <Route path="/login"
              render={() => <Login />} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);