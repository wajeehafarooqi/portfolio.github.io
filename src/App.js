import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import {Route,BrowserRouter as Router,Switch,Redirect} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Banner from './Components/Banner';


function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Switch>
        
        <Route path="/about" component={About}/>
        <Route path="/resume"  component={Resume}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/"  component={Home}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;
