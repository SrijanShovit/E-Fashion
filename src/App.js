import React from 'react'
import Home from './Pages/Home'
import Fwearcoll from './Pages/Fwearcoll'
import Handicraft from "./Pages/Handicraft";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
const App = () => {
 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fwearcollection" component={Fwearcoll} />
        <Route path="/sighandicraft" component={Handicraft} />
        
      </Switch>
    </Router>
    </>
  )
}


export default App
