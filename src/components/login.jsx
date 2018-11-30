import React from "react";

const Login = props => {
  const { id, password } = props.loginCredential;
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={props.onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="brewer">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
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
  );
};

export default Login;
