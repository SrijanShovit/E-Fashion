import React from 'react'
import Home from './Pages/Home'
import Fwearcoll from './Pages/Fwearcoll'
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
        
      </Switch>
    </Router>
    </>
  )
}


export default App
