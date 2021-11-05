import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import Aboute from "./Aboute";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer"; 


const App = () => {
  return(
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/aboute" component={Aboute}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
   </Switch>
   <Footer />
    </>
  )
}
export default App;
