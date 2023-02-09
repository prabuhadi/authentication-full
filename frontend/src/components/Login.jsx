import React from "react";
import logo from "../logo.png";

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="columns is-centered">
                <img
                  src={logo}
                  className="p-0, mb-3"
                  width="200"
                  height="28"
                  alt="logo"
                />
              </div>
              <form className="box">
                <h1 className="is-size-4 has-text-weight-bold has-text-centered is-uppercase is-dark is-2">
                  Sign In
                </h1>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="example@mail.com"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="***********"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
