import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './components/pages/HomepPage'
import LoginPage from './components/pages/LoginPage'

const App = ()=><div className="ui container">
  <Route path='/' component={HomePage} exact/>
  <Route path='/login' component={LoginPage} exact/>
</div>
export default App;
