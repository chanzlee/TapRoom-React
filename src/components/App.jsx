import React from "react";
//import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./admin";
import Home from "./home";
import NavBar from "./navbar";
import Store from "./store";
import NotFound from "./notFound";

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App() {
  var styles = {};
  return (
    <div>
      <NavBar />
      <div className="jumbotron">
        <h1>TapRoom-React</h1>
      </div>
      <div>
        <Switch>
          <Route path="/store" component={Store} />
          <Route path="/admin" component={Admin} />
          <Route path="/not-found" component={NotFound} />
          {/* <Route exact path="/" component={Home} /> */}
          <Redirect exact from="/" to="/store" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
