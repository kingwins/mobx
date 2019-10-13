import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React, { Component } from 'react'
import {observer} from 'mobx-react'
import Schools from './components/Schools'
import Courts from './components/Courts'
import Navbar from './components/Navbar'

@observer
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* <BrowserRouter basename="/mobx">  */}
        <div className="App">
          <Navbar />
          <Switch>            
            <Route exact path="/" render={(props) => <Schools store={this.props.store} {...props}/>}/>
            <Route exact path="/schools" render={(props) => <Schools store={this.props.store} {...props}/>}/>
            <Route path="/courts" render={(props) => <Courts store={this.props.store} {...props}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
