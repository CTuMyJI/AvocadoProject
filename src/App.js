import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home/Home'
import { Services } from './pages/Services/Services'
import { Partners } from './pages/Partners/Partners'
import OnconsultContainer from './pages/Onconsult/OnconsultContainer'
import AboutContainer from './pages/About/AboutContainer'
import UsersContainer from './pages/Users/UsersContainer'
import ProfileAContainer from './pages/Partners/A/ProfileAContainer'
import ProfileNContainer from './pages/Partners/N/ProfileNContainer'
import ProfileContainer from './pages/Profile/ProfileContainer'

function App(props) {
  return (
    <div>
      <Navbar />
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
        </Switch>
      </div>
    </div>
  );
}

export default App;