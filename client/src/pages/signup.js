import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
//axios is used to make requests to the server

// import { Link } from 'react-router-dom';

import Auth from "../utils/auth";
//Where do I bring the Auth in?

export default function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/signup",
        {
          name,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      console.log("Signup successful.");
      return window.location.assign("/post");
    } catch (error) {
      console.log(error);
    }
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
                <h1 className="display-1">SIGN UP</h1>
              </div>
              <div className="col-md-4 m-2">
                <Form onSubmit={handleSignup}>
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

                  <button type="submit" className="btn btn-primary m-2">
                    Signup
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
