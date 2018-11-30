import React from "react";
import Input from "../components/common/input";
import Modal from "../components/common/modal";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToLogin: false,
      showSignUpModal: !this.props.signUpFail
    };
    this.hideSignUpModal = this.hideSignUpModal.bind(this);
  }

  // if (this.props.signUpFail === false) {
  //   this.setState({ showSignUpModal: true });
  // }

  hideSignUpModal() {
    this.setState({ redirectToLogin: true, showSignUpModal: false });
    return <Redirect to="/login" />;
  }

  render() {
    const { signUpCredential, signUpFail } = this.props;
    return (
      <div>
        {signUpFail === false ? (
          <div>
            <Modal
              title="Sign Up"
              show={this.state.showSignUpModal}
              handleClose={this.hideSignUpModal}
              modalTarget={
                <div>
                  <h3>Signed up Successfully</h3>
                </div>
              }
            />
            {this.state.redirectToLogin ? <Redirect to="/login" /> : null}
          </div>
        ) : (
          <div className="mx-auto d-block w-50">
            <h1>Sign Up</h1>
            <form onSubmit={this.props.onSubmit}>
              <Input
                name="name"
                label="Name"
                value={signUpCredential.name}
                onChange={this.props.onChange}
              />
              <Input
                name="id"
                label="Id"
                value={signUpCredential.id}
                onChange={this.props.onChange}
              />
              <Input
                name="password"
                label="Password"
                value={signUpCredential.password}
                type="password"
                onChange={this.props.onChange}
              />
              <button
                style={{ float: "right" }}
                type="submit"
                className="btn btn-primary btn-sm"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

SignUp.propTypes = {
  signUpFail: PropTypes.bool,
  signUpCredential: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
};

export default SignUp;
