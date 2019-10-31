import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ServicesComponent from './ServicesComponent/ServicesComponent'
import ServicesMenu from './ServicesComponent/ServicesMenu'

export const Services = (props) => {
    return (
        <div className="jumbotron">
            <Switch>
                <Route path="/services/1"
                    render={() => <ServicesComponent />} />
                <Route path="/services/2"
                    render={() => <ServicesComponent />} />
                <Route path="/services/3"
                    render={() => <ServicesComponent />} />
                <ServicesMenu />
            </Switch>
        </div>
    )
}