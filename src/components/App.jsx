import React from "react";
//import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./admin";
// import Home from './home';
import NavBar from "./navbar";
import Store from "./store";
import Employee from "./employee";
import NotFound from "./notFound";
import Login from "./login";
import User from "../model/user";
import Credential from "../model/credential";
import { getUserList } from "../services/userService";

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: getUserList(),
      loginCredential: new Credential(),
      currentUser: new User(),
      loggedIn: false,
      accessDenied: null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectToTarget = this.redirectToTarget.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    console.log(this.state.loginCredential);
    let userListCopy = this.state.userList.slice();
    let filterById = userListCopy.filter(
      user => user.id == this.state.loginCredential.id
    );
    if (filterById.length == 0) {
      this.setState({ accessDenied: true });
      console.log("Login failed");
    } else if (filterById[0].password == this.state.loginCredential.password) {
      this.setState({
        accessDenied: false,
        loggedIn: true,
        currentUser: filterById[0],
        loginCredential: new Credential()
      });
    } else {
      this.setState({ accessDenied: true });
      console.log("Login failed");
    }
  }

  handleChange(event) {
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.id);
    let loginCredential = Object.assign({}, this.state.loginCredential);
    loginCredential[event.currentTarget.id] = event.currentTarget.value;
    this.setState({ loginCredential: loginCredential });
    console.log(this.state.loginCredential);
  }

  redirectToTarget(target) {
    console.log("redirect");
    return <Redirect to={"/" + target} />;
  }

  render() {
    return (
      <div>
        <NavBar
          loggedIn={this.state.loggedIn}
          currentUser={this.state.currentUser}
        />
        <div className="jumbotron">
          <h1>SeaTap</h1>
        </div>
        <div className="container">
          <Switch>
            <Route path="/store" component={Store} />
            <Route path="/admin" component={Admin} />
            <Route path="/employee" component={Employee} />
            <Route
              path="/login"
              render={props => (
                <Login
                  {...props}
                  onSubmit={e => this.handleLogin(e)}
                  onChange={e => this.handleChange(e)}
                  loginCredential={this.state.loginCredential}
                  loggedIn={this.state.loggedIn}
                  accessDenied={this.state.accessDenied}
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            {/* <Route exact path="/" component={Home} /> */}
            <Redirect exact from="/" to="/store" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

//App.propTypes = {
//};

export default App;
