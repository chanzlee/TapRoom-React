import React from "react";
import Input from "../components/common/input";
import { Redirect } from "react-router-dom";

const Login = props => {
  const { loginCredential, accessDenied } = props;
  return (
    <div>
      {accessDenied === false ? (
        <Redirect to="/store" />
      ) : (
        <div>
          <h1>Login</h1>
          <form onSubmit={props.onSubmit}>
            <Input
              name="username"
              label="Username"
              value={loginCredential.id}
              onChange={props.onChange}
            />
            <div className="form-group">
              <label htmlFor="brewer">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={loginCredential.password}
                onChange={props.onChange}
                className="form-control"
              />
            </div>
            <button
              style={{ float: "right" }}
              type="submit"
              className="btn btn-success btn-sm"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
