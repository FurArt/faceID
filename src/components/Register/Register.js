import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSigni = (event) => {
    event.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    };
    const messeg = {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
      Host: "127.0.0.1:3000",
      body: JSON.stringify(data),
    };
    fetch("http://localhost:5000/register", messeg)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("response: ", data);
          this.props.loadUsserData(data);
          this.props.onRoutechange("home");
        }
      })
      .catch((error) => console.log("error", error));
  };
  render() {
    const { onEmailChange, onSubmitSigni, onPasswordChange, onNameChange} = this;
    return (
      <div className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
          <form onSubmit={onSubmitSigni} className="measure">
            <fieldset
              id="sign_up_register"
              className="ba b--transparent ph0 mh0"
            >
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6"
                  htmlFor="email-address-register"
                >
                  Name
                </label>
                <input
                  onChange={onNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name-address-register"
                  id="name-address-register"
                />
                <label
                  className="db fw6 lh-copy f6"
                  htmlFor="email-address-register"
                >
                  Email
                </label>
                <input
                  onChange={onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address-register"
                  id="email-address-register"
                />
              </div>
              <div className="mv3">
                <label
                  className="db fw6 lh-copy f6"
                  htmlFor="password-register"
                >
                  Password
                </label>
                <input
                  onChange={onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password-register"
                  id="password-register"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default Register;
