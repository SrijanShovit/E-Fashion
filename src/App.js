import React from 'react'
import Home from './Pages/Home'
import TrendingWear from './Pages/TrendingWear'
import {MenWear, WomenWear, KidsWear, PartyWear} from './Pages/WearCollection';
import { IndianBeauty, MenBeauty, MordernBeauty, WomenBeauty } from './Pages/BeautyCollection';

import Fwearcoll from './Pages/Fwearcoll'
import Handicraft from "./Pages/Handicraft";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { City_Fashion } from './Pages/City Fashion'
import LocalStore from './Pages/LocalStore'
import { City_Beauty } from './Pages/City Beauty';

const App = () => {
 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fwearcollection" component={Fwearcoll} />
        <Route path = "/sighandicraft" component={Handicraft} />
        <Route path="/fashion" component={City_Fashion} />
        <Route path='/beauty' component={City_Beauty}/>

        <Route path = "/TrendingWear" component={TrendingWear} />
        <Route path = "/LocalStore" component={LocalStore} />

        <Route path = '/MenWear' component={MenWear}/>
        <Route path='/WomenWear' component={WomenWear}/>
        <Route path='/KidsWear' component={KidsWear}/>
        <Route path='/PartyWear' component={PartyWear}/>

        <Route path = '/MenBeauty' component={MenBeauty}/>
        <Route path='/WomenBeauty' component={WomenBeauty}/>
        <Route path='/IndianBeauty' component={IndianBeauty}/>
        <Route path='/MordernBeauty' component={MordernBeauty}/>
      </Switch>
    </Router>
    </>
  )
}


export default App;