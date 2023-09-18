import React from "react";
import Navbar from "./Navbar";
import "../css/page.css";
import "../css/style.css";
import "../css/LoginPage.css";
import Layout from "./Layout";
import { Link, redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useCurrentUser } from "./userState";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
const LOCALHOST = `${API_URL}`;

const client = axios.create({
  baseURL: `${LOCALHOST}`,
});

function Logger(body) {
  fetch(`${LOCALHOST}/api/auth/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((resp) => resp.json());
}

function LoginPage() {
  console.log(client.baseURL);
  console.log("jhfdjh");

  //   const [currentUser, setCurrentUser] = useState();
  const { currentUser, setCurrentUser } = useCurrentUser(); // Use the currentUser state
  //   setCurrentUser(true);
  //   useCurrentUser(true);
  console.log(currentUser);

  var isFormNotFilled = false;
  //   console.log(isFormNotFilled);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const [token, setToken] = useCookies(["token"]);

  //Tests

  //   useEffect(() => {
  //     var utoken = token["token"];
  //     if (String(utoken) == "undefined") {
  //       navigate("/login");
  //     } else {
  //       navigate("/");
  //     }
  //   }, [token]);

  //   const MakeLogin = () => {
  //     if (username.trim().length !== 0 || password.trim().length !== 0) {
  //       Logger({ username, password }).then((resp) => setToken(resp.token));
  //     } else {
  //       isFormNotFilled = true;
  //     }
  //   };

  function MakeLogin(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
    // prettier-ignore
    client
      .post("/api/login/", {
        username: username,
        password: password
      })
      .then(function (res) {
        setCurrentUser(true);
        navigate("/create");
      });
  }

  return (
    <>
      <Layout>
        <button className="btn btn-gradient" onClick={() => setCurrentUser(true)}>
          sds
        </button>
        <div className="container mt-5 login-pc-block">
          <div className="row">
            <div className="col-md-5 col-12">
              <img src="/assets/images/login-banner.png" className="danceImg" alt="" width="500" />
            </div>
            <div className="col-md-5 col-12 pcontainer login-pc-v">
              <form className="login-form" onSubmit={(e) => MakeLogin(e)}>
                <div className={({ isFormNotFilled }) => (isFormNotFilled ? "info-box" : "info-box")} role="alert">
                  Welcome back! Please enter your credentials to log in.
                </div>
                <input required type="text" name="username" className="login-field" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input required type="password" name="password" className="login-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
              <div className="text-white mt-4">
                New to SeatFinder?{" "}
                <Link className="text-white" to="/signup">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mbl-container login-mbl-block">
          <div className="pcontainer login-pc-v">
            <form className="login-form">
              <div class="info-box" role="alert">
                Welcome back! Please enter your credentials to log in.
              </div>
              <input type="text" className="login-field" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
              <input type="password" className="login-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className="login-button" onClick={MakeLogin}>
                Login
              </button>
            </form>
            <div className="text-white mt-4">
              New to SeatFinder?{" "}
              <Link className="text-white" to="/signup">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default LoginPage;
