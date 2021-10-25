import React from 'react'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { City_Local } from './Pages/City Local'
const App = () => {
 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/local" component={City_Local} />
        
      </Switch>
    </Router>
    </>
  )
}


export default App
