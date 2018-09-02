import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './components/pages/HomepPage'

const App = ()=><div>
  <Route path='/' component={HomePage}/>
</div>
export default App;
