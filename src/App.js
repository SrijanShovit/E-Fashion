import React from 'react'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { City_Fashion } from './Pages/City Fashion'
const App = () => {
 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fashion" component={City_Fashion} />
        
      </Switch>
    </Router>
    </>
  )
}


export default App
