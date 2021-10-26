import React from 'react'
import Home from './Pages/Home'
import HandiCraft from './Pages/HandiCraft'
import TrendingWear from './Pages/TrendingWear'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import LocalStore from './Pages/LocalStore'
const App = () => {
 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/HandiCraft" component={HandiCraft} />
        <Route path = "/TrendingWear" component={TrendingWear} />
        <Route path = "/LocalStore" component={LocalStore} />
        
      </Switch>
    </Router>
    </>
  )
}


export default App
