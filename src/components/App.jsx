import React from "react";
//import PropTypes from 'prop-types';
import { Switch, Route } from "react-router-dom";

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App() {
  var styles = {};
  return (
    <div className="jumbotron" style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <h1>TapRoom-React</h1>
      {/* <Switch>
        <Route exact path='/' component={} />
      </Switch> */}
    </div>
  );
}

//App.propTypes = {
//};

export default App;
