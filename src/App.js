import React from 'react'
import Home from './Pages/Home'
import TrendingWear from './Pages/TrendingWear'
import {MenWear} from './Pages/WearCollection';
import { WomenWear } from './Pages/WearCollection';
import { KidsWear } from './Pages/WearCollection';
import { PartyWear } from './Pages/WearCollection';

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
        <Route path = "/sighandicraft" component={Handicraft} />
        <Route path="/fashion" component={City_Fashion} />
        <Route path = "/TrendingWear" component={TrendingWear} />
        <Route path = "/LocalStore" component={LocalStore} />
        <Route path = '/MenWear' component={MenWear}/>
        <Route path='/WomenWear' component={WomenWear}/>
        <Route path='/KidsWear' component={KidsWear}/>
        <Route path='/PartyWear' component={PartyWear}/>
      </Switch>
    </Router>
    </>
  )
}


export default App
