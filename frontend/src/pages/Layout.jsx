import React, { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice.js";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  // protected layout need autorize to access
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
          <div
            className="has-text-centered"
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "50%",
            }}
          >
            Copyright &copy; 2023 AdminPro. All Rights Reserved.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
