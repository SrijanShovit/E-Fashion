import React from 'react'
import Home from './Pages/Home'

import Fwearcoll from './Pages/Fwearcoll'
import Handicraft from "./Pages/Handicraft";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { City_Fashion } from './Pages/City Fashion'
import LocalStore from './Pages/LocalStore'
const App = () => {
 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/fwearcollection" component={Fwearcoll} />
        <Route path="/sighandicraft" component={Handicraft} />
        

        <Route path="/fashion" component={City_Fashion} />
        
        <Route path = "/TrendingWear" component={TrendingWear} />
        <Route path = "/LocalStore" component={LocalStore} />

      </Switch>
    </Router>
    </>
  )
}


export default App
