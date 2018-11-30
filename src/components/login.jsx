import React from "react";
import Input from "../components/common/input";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

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
              name="id"
              label="Id"
              value={loginCredential.id}
              onChange={props.onChange}
            />
            <Input
              name="password"
              label="Password"
              value={loginCredential.password}
              onChange={props.onChange}
            />
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

Login.propTypes = {
  accessDenied: PropTypes.bool,
  loginCredential: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
};

export default Login;
