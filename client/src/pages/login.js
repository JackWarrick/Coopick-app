import React, { useState } from "react";
import axios from "axios";
//import profilepic from '../../assets/me.jpeg';
//import "../../styles/about.css"
// import Auth from '../utils/auth';
import Auth from "../utils/auth";
import { Form } from "react-bootstrap";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // This may not create the user in the database

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/api/users/login", {
        name: name,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        console.log("Login successful.");
        window.location.assign("/home");
      })
      .catch(function (error) {
        if (error.response) {
          // Show error message
          setError(error.response.data.error);
        } else {
          setError("Invalid username/password. Please try again.");
        }
      });
  };

  if (Auth.loggedIn()) {
    console.log(Auth.loggedIn);
    return window.location.assign("/home");
  } else {
    return (
      <>
        <div className="App">
          <div className="container">
            <button className="btn btn-light m-2">
              <a href="/">Return to initial page</a>
            </button>
            <div className="row d-flex justify-content-center">
              <div className="bg-secondary text-light">
                <h1 className="display-1">LOG IN</h1>
              </div>
              <div className="col-md-4 m-2">
                <Form onSubmit={handleLogin}>
                  <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg m-2">
                    Login
                  </button>
                  {error && <p>{error}</p>}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
