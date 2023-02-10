import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // redirect user setelah login
import { LoginUser, reset } from "../features/authSlice";
import logo from "../logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  // setelah user berhasil distate maka akan redirect ke dashboard
  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]); // tambahkan dependency array react hook

  // prevent default agar ketika submit page tidak reload
  // setelah dispatch triger set state user
  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <section className="hero has-background-link-light is-fullheight is-fullwidth">
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
              <form onSubmit={Auth} className="box">
                <h1 className="is-size-4 has-text-weight-bold has-text-centered is-uppercase is-dark is-2">
                  Sign In
                </h1>
                {isError && (
                  <p className="has-text-centered has-text-danger	">{message}</p>
                )}
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="example@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button has-text-weight-bold is-uppercase is-success is-fullwidth"
                  >
                    {isLoading ? "Loading..." : "Login"}
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
