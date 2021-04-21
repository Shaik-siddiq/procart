import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './modules/layout/Navbar';
import Laptop from './modules/Product/Laptops';
import Mobile from './modules/Product/Mobile';
import Watch from './modules/Product/Watch';
import Upload from './modules/Order/Upload';
import Login from './modules/User/Login';
import Registration from './modules/User/Registration';
import Profile from './modules/User/Profie'

function App() {
  return (
    <div>
    <Router>
    <Navbar />
      <Switch>
        <Route exact path='/Mobile' component={Mobile}/>
        <Route exact path='/Laptop' component={Laptop}/>
        <Route exact path='/Watch' component={Watch}/>
        <Route exact path='/Upload' component={Upload}/>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Registration' component={Registration}/>
        <Route exact path='/Profile' component={Profile}/>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
