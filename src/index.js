import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import SubpageDesktop from './views/subpage-desktop'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={SubpageDesktop} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
