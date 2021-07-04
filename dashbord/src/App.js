import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topview from './component/Topview';
import Footer from './component/Footer';
import Openzone from './component/Openzone';
import Admin from './component/ADMIN/Admin';
import User from './component/User/User';


function App() {
  return (
    <div>
    <Router>
    <div className="App">
    <Topview/>
    <br></br>
    <Switch>
    
      <Route exact path="/Openzone" component={Openzone}></Route>
      <Route exact path="/Admin" component={Admin}></Route>
      <Route exact path="/User" component={User}></Route>
      
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
