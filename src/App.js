import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Services } from './pages/Services/Services'
import { Partners } from './pages/Partners/Partners'
import AboutContainer from './pages/About/AboutContainer'
import UsersContainer from './pages/Users/UsersContainer'
import ProfileAContainer from './pages/Partners/A/ProfileAContainer'
import ProfileNContainer from './pages/Partners/N/ProfileNContainer'
import NavbarContainer from './components/NavbarContainer'
import Login from './pages/Login/Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/Reducers/appReducer'
import Preloader from './components/common/Preloader'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux-store'
import { withSuspense } from './hoc/WithSuspense'
import HomeContainer from './pages/Home/HomeContainer'
import ConverterTest from './pages/Convertation/Convert/ConverterTest'

const OnconsultContainer = React.lazy(() => import('./pages/Onconsult/OnconsultContainer'));
const ProfileContainer = React.lazy(() => import('./pages/Profile/ProfileContainer'));

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    //alert("Some error occured");
    //console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
            <Route path="/" exact component={HomeContainer} />
            <Route path="/about"
              render={() => <AboutContainer />} />
            <Route path="/services" component={Services} />
            <Route path="/onconsult"
              render={withSuspense(OnconsultContainer)} />
            <Route path="/profile/:userId?"
              render={withSuspense(ProfileContainer)} />
            <Route path="/partners"
              render={() => <Partners />} />
            <Route path="/users"
              render={() => <UsersContainer pageTitle={"Samurais:"}/>} />
            <Route path="/profilen"
              render={() => <ProfileNContainer />} />
            <Route path="/profilea"
              render={() => <ProfileAContainer />} />
            <Route path="/login"
              render={() => <Login />} />
            <Route path="/convert"
              render={() => <ConverterTest />} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const AvocadoApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default AvocadoApp;